
import './App.css';
import Homepage from './Components/Homepage';
import Logo from './Components/Logo';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Residence from './Components/Residence';
import Review from './Components/Review';
import Pagination from './Components/Pagination';
import Validation from './Components/Validation';
import Footer from './Components/Footer.jsx';

function App() {

  return (
    <>
    <Navbar/>
    <Homepage/>
    <Logo/>
    <Residence/>
    <Pagination/>
    <Review/>
    <Validation/>
    <hr />
  <Footer/>
    </>
  )
}

export default App
