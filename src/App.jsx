import './App.css'
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import About from './Components/About';
import ContactForm from './Components/contactForm';
import Navbar from './Components/navbar';
import Footer from './Components/footer';

function App() {

  return (
      <div className="App">  
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ContactForm />
      <Footer />
      </div>
  )
}

export default App
