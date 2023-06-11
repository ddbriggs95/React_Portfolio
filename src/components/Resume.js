import React from "react";
import {resume} from '../assets/Briggs_Dowling_CV.pdf'
function Resume() {

    return (
         <div>
             <a href={resume} target="_blank" rel="noreferrer">
               Click here to view Resume
            </a>

        </div>
     )
}

export default Resume;