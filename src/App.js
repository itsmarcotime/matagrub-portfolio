import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/work":
      component = <Work />
      break
    case "/contact":
      component = <Contact />
      break
    case "/resume":
      component = <Resume />
      break
  }

  return (
    <>
    <Nav />
    {component}
    </>
  );
}

export default App;
