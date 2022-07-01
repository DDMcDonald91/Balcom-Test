import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation.js';
import Hero from './Components/Hero.js';
import Info from './Components/Info.js';
import Socials from './Components/Socials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navigation />
      <div className='App'>
      <Hero />
      <Info />  
      <Socials />
      <Contact />
      <Footer />
      </div>
    </>
  );
}

export default App;
