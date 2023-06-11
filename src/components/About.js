import React from "react";
import Container from "react-bootstrap/Container";
import headshot from '../assets/Headshot.jpg';


function About() {
    return (
        <section class="container">
        <div class="row about-row">
            <div class="col-4"><img src={headshot} alt="an image of me" class="headshot"></img></div>
            <div class="col-8 about-text">Hello! My name is Dowling Briggs and I was born and raised in Birmingham, AL. I attended the University of Alabama graduating in 2017 with an MIS degree with a minor in Computing App & Technologies. I was hired by Accenture in Nashville straight out of college where I worked as an Application Development Associate Consultant working specifically in the RPA sector doing development work. I am currently finishing the Georgia Tech Full stack development bootcamp and am transitioning to more traditional development role!
            </div>
            
        </div>
        </section>   
    )
}

export default About;