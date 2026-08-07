import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import LaserServices from './components/LaserServices/LaserServices';
import PodologiaServices from './components/PodologiaServices/PodologiaServices';
import Technology from './components/Technology/Technology';
import WhyUs from './components/WhyUs/WhyUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <LaserServices />
        <Technology />
        <PodologiaServices />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
