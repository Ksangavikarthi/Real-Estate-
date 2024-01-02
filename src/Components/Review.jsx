import React from "react";
import './Review.css';
import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"
import person4 from "../assets/person4.jpg"
import person5 from "../assets/person5.jpg"

export default function Review(){
    return(
        
        <div className="review">
        <h2 className="client"> <b>OUR CLIENTS REVIEW</b></h2>
        <h6 className="author">William Jennings Bryan</h6>
        <p className="work">Product Designer, USA</p>
        <div className="comment">
        <p> "Real estate is the best investment for small savings. <br /> More money is made from the rise in real estate values than from all other causes combined."</p>
        </div>
        <div className="network">
        <span>. . . . . .</span>
 <img src={person2} alt="person2"  width={110} height={100} className="person2"/>
 <img src={person1} alt="person1"  width={110} height={100} className="person1"/>
 <img src={person3} alt="person3"  width={110} height={100} className="person3"/>
 <img src={person5} alt="person5"  width={110} height={100} className="person5"/>
 <img src={person4} alt="person4"  width={110} height={100} className="person4"/>
 <span>. . . . . .</span>
        </div>
        </div>
    )
}