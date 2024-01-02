import React from "react";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import './SaleCard.css';

export default function SaleCard(){
  return(
        <div className="sales">
        <div className="boxes">
            <img className="house" src={pic1}  alt="pic1" height="200px" width="250px"/><br/><br />
            <h4 className="pr">$47,043</h4>
            <h5 className="paragraph">Aliva Private Gargen</h5>
            <p className="addr">94 Ingraham st, Bibble,K127,Uk</p>
            </div>
        <div className="boxes">
            <img  className="house" src={pic2} alt="pic2" height="200px" width="250px"/><br/><br />
            <h4 className="pr">$66,535</h4>
            <h5 className="paragraph">Garden City Assat</h5>
            <p className="addr">94 Ingraham st,Broly,NY1127,USA</p>

        </div>
            <div className="boxes">
            <img className="house" src={pic3} alt="pic3" height="200px" width="250px"/><br/><br />
            <h4 className="pr">$35,179</h4>
            <h5 className="paragraph">Gables Luxurious House</h5>
            <p className="addr">56 Sagram st, Rockyland, SA785,SA</p>
            </div>
        
        </div>
    )
}