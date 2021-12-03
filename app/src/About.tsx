import React, { useRef, useState, useEffect } from "react";
import "./assets/css/About.css"

// start processing video

function About() {
  
  return (
    
    // <div classNameName="App">
    <div id="main" className="wrapper style1">
					<div className="container">
						<header className="major">
							<h2>About</h2>
							<p>Augmented Reality Sudoku Solver</p>
						</header>

						
							<section id="content">
              <a href="#" className="image fit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1024px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png" alt=""/></a>
                <a href="#" className="image fit2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Sudoku_Puzzle_by_L2G-20050714_solution_standardized_layout.svg/1024px-Sudoku_Puzzle_by_L2G-20050714_solution_standardized_layout.svg.png" alt="" /></a>
								<h3>Augmented Reality Sudoku Solver</h3>
								<p style={{color:"white"}}>Augmented Reality Sudoku Solver is a  software that provides an optimal way of recognizing a sudoku puzzle using Computer Vision and Deep Learning.
 and solve the puzzle using constraint programming and backtracking algorithms to display the solved puzzle as augmented reality.

</p>
								
							</section>

					</div>
				</div>
    


  );
}

export default About;
