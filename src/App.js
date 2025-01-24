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
import { Home } from './pages/Home/Home';
import { Teste } from './components/Teste';
import { HowWorks } from './pages/HowWorks/HowWorks';

function App() {
  return (
    <div className="app-container">
      
      <Home />
      
      <HowWorks />
  
      <div style={{ position: 'absolute', right: 20, marginTop: '130%' }}>
        <Image src='assets/effects-line-2.svg' />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
        <div style={{ marginTop: '-40vh' }}>
          <Sobre />
        </div>

        <Parceirias />

        <div style={{ position: 'absolute', left: 120, marginTop: '98%' }}>
          <Image src='assets/effects-line-3.svg' />
        </div>
      </div>

      <div style={{ marginTop: '30vh', marginBottom: '30vh', display: 'flex', justifyContent: 'end' }}>
        <Teste />
      </div>
      {/* <FeatureSection /> */}
      {/* <ContactForm /> */}
      <Footer /> 
    </div>
  );
}

export default App;
