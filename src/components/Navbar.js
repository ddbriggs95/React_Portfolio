import React from "react";
import { Col, Row, Navbar } from "react-bootstrap";



function NavbarFunc({ currentPage, handlePageChange}) {
  return (

    <Navbar>
      
      <Col>
        <a href="#about" onClick={() => handlePageChange('About')}>About</a>
      </Col>
      <Col>
        <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
      </Col>
      <Col><a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a></Col>
      <Col><a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a></Col>


    </Navbar>


  );
}

export default NavbarFunc;