import React from 'react';
// import Image from 'react-bootstrap/Image';


function Header() {

    var stylesheet = {
        header: {
            color: "white",
            backgroundImage:`url(${require('../assets/header.jpg')})`,
            padding: '35px',
            display: 'flex',
            justifyContent: 'center'
    
        },
        
    }

    return (
      
        <h1 style={stylesheet.header}>Dowling Briggs</h1>
    //    <img src={require("../assets/header.jpg")} />

    );
}

export default Header;
 