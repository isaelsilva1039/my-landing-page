import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BottomHeader from './components/Bottom-hedaer';
import { Image } from 'react-bootstrap';
import ProductWhitLabel from './components/ProductWhitLabel';
import Beneficios from './components/Beneficios';
import Sobre from './components/Sobre';
import Parceirias from './components/Parceirias';


function App() {
  return (
    <div className="app-container">
      
  

           
      <Header />
      <BottomHeader />
      <ProductWhitLabel />
      <Beneficios />
      <Sobre />
      <Parceirias />
      {/* <FeatureSection /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </div>
  );
}




export default App;
