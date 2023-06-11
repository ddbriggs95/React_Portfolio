import React from "react";


function Portfolio() {
    return (
      <section class="container image-row">
      <div class="row">
          <div class="card col-md" onclick="link">
                  <div class="project-1"></div>
              <h2>Work Day Scheduler</h2>
              <p>This project I utilized Day.js library to work with date and time to create a simple calendar application.</p>
              <a href="https://ddbriggs95.github.io/WorkdaySchedulerJS/" target="_blank">Deployed App</a>
          </div>
          <div class="card col-md">
              <div class="project-2"></div>
              <h2>Note Taker App</h2>
              <p>This project I used Express to build a note-taking application.</p>
              <a href="https://dowlingbriggs-notetakerapp.herokuapp.com/notes" target="_blank">Deployed App</a>
          </div>
          <div class="card col-md">
              <div class="project-3"></div>
              <h2>Project 3</h2>
              <p>This is where my Project 3 will go -- COMING SOON!!! </p>
              
          </div>
      </div>
      </section>


    )
}

export default Portfolio;