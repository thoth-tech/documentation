import './App.css';
import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Teachers from './Components/Teachers';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends Component {
 
  render() {
    
  return (
    
    <>
        <Navbar/>
        <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </Router>
       
        <Footer/>
       </>
  );
  }
}
export default App;
