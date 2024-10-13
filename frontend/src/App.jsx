// import './App.css'
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Trainings from './Components/Trainings';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import AWS from './Components/aws';
import Cybersecurity from './Components/cybersecurity';
import Forensic from './Components/forensic';
import Ethicalhacking from './Components/ethicalhacking';
import {Toaster} from 'react-hot-toast'



function App() {


  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trainings" element={<Trainings/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/aws" element={<AWS/>}/>
        <Route path="/forensic" element={<Forensic/>}/>
        <Route path="/cybersecurity" element={<Cybersecurity/>}/>
        <Route path="/ethicalhacking" element={<Ethicalhacking/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
    </>
  )
}

export default App
