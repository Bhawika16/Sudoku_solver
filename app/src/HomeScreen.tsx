import React, { useRef, useState, useEffect } from "react";
import "./assets/css/main.css";
import Video  from "./Video";
import About from "./About";
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import { useHistory } from 'react-router';


// start processing video

function HomeScreen() {
    const history=useHistory();
  const [help,sethelp]=useState(0);
  const [about,setAbout]=useState(0);
  
  return (
    
    // <div className="App">
    // onClick={()=>{setAbout(1)}}
      
               
    <div>
      <header id="header">
     <h1 id="logo">Augmented Reality Sudoku solver</h1>
<nav id="nav"> 
<ul>
<li style={{whiteSpace: "nowrap"}}>
    <a onClick={()=>history.push("/instructions")}>Instructions</a>
    </li>
  <li style={{whiteSpace: "nowrap"}}>
      <a onClick={()=>history.push("/about")}>About Us</a>
  </li>
    
    {/* {about?<Router><Route exact path="/about"><About></About></Route></Router>:null} */}
   
</ul>
</nav>
      </header>
      {(!help)&&(<section id="banner">
					<div className="content">
						<header>
							<h2>Augmented Reality Sudoku Solver</h2>
							<button className="button" onClick={()=>{sethelp(1)}}><span>Scan Puzzle</span></button>	
						</header>
						<span className="image"><img src="images/thesudoku.png" alt="" /></span>
          </div>
         

				</section>
      
        )}

{help?<Video></Video>:null}
    </div>
      
  );
}

export default HomeScreen;
