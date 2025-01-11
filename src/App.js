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


function App() {
  return (
    <div className="app-container">
       <Image className='linha-99' src="assets/Vector4.png" />
       <Image className='linha-98' src="assets/Vector3.png" />
       <Image className='linha-97' src="assets/Vector2.png" />
            <Image className='linha-96' src="assets/Vector1.png" />
  

           
      <Header />
      <BottomHeader />
      {/* <FeatureSection /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </div>
  );
}




export default App;
