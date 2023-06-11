import React from "react";
import resume from '../assets/Briggs_Dowling_CV.pdf'
function Resume() {

    return (
        <div>Click here to download my resume
            <a href={resume} download>
                <button>Download</button>
            </a>

        </div>
    )
}

export default Resume;