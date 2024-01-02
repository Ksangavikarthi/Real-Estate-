import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import  Homeimg from'../assets/Homeimg.jpg';
import './Pagination.css'

export default function Pagination(){
    return(
        <div className="points">
<div className="view">
    <img src={Homeimg} alt="home" width={380} height={320}/>
</div>
<div className="lines">
  <h3>Value We Give to You</h3>
  <p>We always ready to help by providing the best services.</p>
<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <i> Is it wise to invest in real estate in India? </i></Accordion.Header>
        <Accordion.Body>
        Absolutely! Real estate can be a great investment option in India, as it offers appreciation potential, rental income, tax benefits, and diversification.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><i> What is real estate and its benefits?</i></Accordion.Header>
        <Accordion.Body>
        Real estate is a tangible asset that you can use, improve, or rent out, which offers some degree of control over your investment.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><i>Why would a seller paid points</i></Accordion.Header>
        <Accordion.Body>
        A seller would pay points for a variety of reasons. If the housing market is a buyer's market and, a seller would pay points to entice more buyers and close a deal.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
        </div>
    )
}