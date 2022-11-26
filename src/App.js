import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className='bigContainer'>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
