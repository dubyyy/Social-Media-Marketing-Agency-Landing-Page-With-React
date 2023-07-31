import './App.css'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Services from './assets/components/Services'
import Navbar from './assets/components/Navbar'
import ContactUs from './assets/components/ContactUs'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactUs />
      
    </>
  )
}

export default App
