import React, { useRef, useState, useEffect } from "react";
import "./assets/css/main.css";
import Video  from "./Video";
import About from "./About";
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import HomeScreen from "./HomeScreen";
 import Instructions from "./Instructions";
// start processing video

function App() {
  const [help,sethelp]=useState(0);
  const [about,setAbout]=useState(0);
  
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/about">
              <About></About>
            </Route>
            <Route path="/instructions">
              <Instructions></Instructions>
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
      </Switch>
      </Router>
    </div>
    // <div className="App">
    // onClick={()=>{setAbout(1)}}
      
               
    
      
  );
}

export default App;
