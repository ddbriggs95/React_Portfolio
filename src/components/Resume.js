import React from "react";
//import {resume} from '../assets/
function Resume() {

    return (
         <div>
             <a  target="_blank" rel="noreferrer" onClick={(event) => {
                console.log(event)
                window.open("../assets/Briggs_Dowling_CV.pdf")
             }}>
               Click here to view Resume
            </a>

        </div>
     )
}

export default Resume;