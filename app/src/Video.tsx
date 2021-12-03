import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import "./assets/css/main.css";
import Processor, { VideoReadyPayload } from "./augmentedReality/Processor";
import StatsPanel from "./components/StatsPanel";

// start processing video
const processor = new Processor();

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const [videoWidth, setVideoWidth] = useState(100);
  const [videoHeight, setVideoHeight] = useState(100);

  const [imageCaptureTime, setImageCaptureTime] = useState(0);
  const [thresholdTime, setThresholdTime] = useState(0);
  const [connectedComponentTime, setConnectedComponentTime] = useState(0);
  const [getCornerPointsTime, setGetCornerPOintsTime] = useState(0);
  const [extractImageTime, setExtractImageTime] = useState(0);
  const [extractBoxesTime, setExtractBoxesTime] = useState(0);
  const [ocrTime, setOcrTime] = useState(0);
  const [solveTime, setSolveTime] = useState(0);
  const[help,setHelp]=useState(1);
  const[temp,setTemp]=useState(1);
    // start the video playing
  useEffect(() => {
    
   
    const video = videoRef.current;
    if (video) {
      processor.startVideo(video).then(
        () => setHelp(0),
        (error) => setHelp(1)
      );
    }
  }, [videoRef]);

  // render the overlay
  useEffect(() => {
    

    const interval = window.setInterval(() => {
      const canvas = previewCanvasRef.current;
      if (canvas && processor.isVideoRunning) {
        // update the peformance stats
        setImageCaptureTime(processor.captureTime);
        setThresholdTime(processor.thresholdTime);
        setConnectedComponentTime(processor.connectedComponentTime);
        setGetCornerPOintsTime(processor.cornerPointTime);
        setExtractImageTime(processor.extractPuzzleTime);
        setExtractBoxesTime(processor.extractBoxesTime);
        setOcrTime(processor.neuralNetTime);
        setSolveTime(processor.solveTime);
        // display the output from the processor
        const context = canvas.getContext("2d");
        if (context) {
          context.drawImage(processor.video, 0, 0);
          if (processor.corners) {
            const {
              topLeft,
              topRight,
              bottomLeft,
              bottomRight,
            } = processor.corners;
            context.strokeStyle = "rgba(0,200,0,0.5)";
            context.fillStyle = "rgba(0,0,0,0.3)";
            context.lineWidth = 3;
            context.beginPath();
            context.moveTo(topLeft.x, topLeft.y);
            context.lineTo(topRight.x, topRight.y);
            context.lineTo(bottomRight.x, bottomRight.y);
            context.lineTo(bottomLeft.x, bottomLeft.y);
            context.closePath();
            context.stroke();
            context.fill();
          }
          if (processor.gridLines) {
            context.strokeStyle = "rgba(0,200,0,0.5)";
            context.lineWidth = 2;
            processor.gridLines.forEach((line) => {
              context.moveTo(line.p1.x, line.p1.y);
              context.lineTo(line.p2.x, line.p2.y);
            });
            context.stroke();
          }
          if (processor.solvedPuzzle) {
            context.fillStyle = "rgba(0,200,0,1)";
            for (let y = 0; y < 9; y++) {
              for (let x = 0; x < 9; x++) {
                if (processor.solvedPuzzle[y][x]) {
                  const {
                    digit,
                    digitHeight,
                    digitRotation,
                    position,
                    isKnown,
                  } = processor.solvedPuzzle[y][x];
                  if (!isKnown) {
                    context.font = `bold ${digitHeight}px sans-serif`;
                    context.translate(position.x, position.y);
                    context.rotate(Math.PI - digitRotation);
                    context.fillText(
                      digit.toString(),
                      -digitHeight / 4,
                      digitHeight / 3
                    );
                    context.setTransform();
                  }
                }
              }
            }
          }
        }
      }
    }, 100);
    return () => {
      window.clearInterval(interval);
    };
  }, [previewCanvasRef]);

  // update the video scale as needed
  useEffect(() => {
    

    function videoReadyListener({ width, height }: VideoReadyPayload) {
      setVideoWidth(width);
      setVideoHeight(height);
    }
    processor.on("videoReady", videoReadyListener);
    return () => {
      processor.off("videoReady", videoReadyListener);
    };
  },[]);

  return (
    <div className="App" >
       
       {(help)&&(<section id="banner">
					<div className="content">
						<header>
							<h2>Augmented Reality Sudoku Solver</h2>
							<button className="button" ><span>Scan Puzzle</span></button>	
						</header>
						<span className="image"><img src="images/thesudoku.png" alt="" /></span>
					</div>
					
				</section>
        )}
       
       {temp?<video
        ref={videoRef}
        className="video-preview"
        width={10}
        height={10}
        playsInline
        muted
      />:null}
      {temp?<canvas
        ref={previewCanvasRef}
        className="preview-canvas"
        width={videoWidth}
        height={videoHeight}
      />:null} 
     
    </div>
  );
}

export default Video;







 {/* <StatsPanel
        imageCaptureTime={imageCaptureTime}
        thresholdTime={thresholdTime}
        connectedComponentTime={connectedComponentTime}
        getCornerPointsTime={getCornerPointsTime}
        extractImageTime={extractImageTime}
        extractBoxesTime={extractBoxesTime}
        ocrTime={ocrTime}
        solveTime={solveTime}
      /> */}