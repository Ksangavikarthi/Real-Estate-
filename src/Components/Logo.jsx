import React from "react";
import "./Logos.css";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

export default function Logo(){
    return(
        <>
        <div className="logos">
       <img src={logo1} alt="logo1" width={180} height={100} className="logo"/>
       <img src={logo2} alt="logo2" width={180} height={100} className="logo"/>
       <img src={logo3} alt="logo3" width={180} height={100} className="logo"/>
       <img src={logo4} alt="logo4" width={180} height={100} className="logo"/>
       <img src={logo5} alt="logo5" width={180} height={100} className="logo"/>
        </div>
        </>
    )
}