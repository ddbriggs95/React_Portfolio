import React from "react";

function Navbar() {
    return (
        
        <nav>
      <div className="logo">
        <a href="/">Your Portfolio</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
        

    );
}

export default Navbar;