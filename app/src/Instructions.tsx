import React from 'react'
import "./assets/css/About.css"
function Instructions() {
    return (
        <div id="main" className="wrapper style1">
					<div className="container">
						<header className="major">
							<h2>Instructions</h2>
							<p>Augmented Reality Sudoku Solver</p>
						</header>

						
							<section id="content">
           
								<h2 style={{color:"white"}}>Steps</h2>
                                <ul>
                                    <li><h3 style={{color:"white"}}>Click the "Scan Puzzle" Button</h3></li>
                                    <li><h3 style={{color:"white"}}>Allow the camera access permission to enable the camera for scanning the Sudoku puzzle.</h3></li>
                                    <li><h3 style={{color:"white"}}>Using Laptop:
Place the Sudoku puzzle infront of the Webcam.</h3></li>
                                    <li><h3 style={{color:"white"}}>Using Mobile:
Place your Mobile Camera over the Sudoku puzzle.</h3></li>
                                </ul>
                                <h3 style={{color:"white"}}>Note: Scanning Device must have good internet connectivity and better camera quality for better results.</h3>

																
							</section>

					</div>
				</div>
    


    );
}

export default Instructions;
