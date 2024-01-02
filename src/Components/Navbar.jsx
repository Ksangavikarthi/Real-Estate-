import React from "react";
import Button from 'react-bootstrap/Button';
import "./Navbar.css"

export default function Navbar(){
    return(
        <div className="nav">
        <div className="title"> RAMA HOME</div>
       <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#agents">AGENTS</a></li>
                <li><a href="#Property">PROPERTY</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        
            <Button variant="secondary">LOGIN</Button>{' '}
        </div>
    )
}

