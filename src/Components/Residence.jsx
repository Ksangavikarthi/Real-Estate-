import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import './Residence.css';
import SaleCard from './SaleCard';

function Residence() {
  return (

  <div className='residence'>
  <h3 className='choice'><marquee behavior="alternate" direction="left" >Best choice</marquee></h3>
  <h1 className='title-content'>Popular residence</h1>

    <Carousel>
      <Carousel.Item interval={500}>
        <img src={pic1} alt="pic1"  width={500} height={400} className='imgs'/>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={pic2} alt="pic2"  width={500} height={400} className='imgs'/>
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={pic3} alt="pic3"  width={500} height={400} className='imgs'/>
        
      </Carousel.Item>
    </Carousel>
    <SaleCard/>
   </div>

   
   
  );
}

export default Residence;