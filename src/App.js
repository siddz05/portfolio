import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Intro from './components/Intro';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
<div>
  {/* Wrapper */}
  <div id="wrapper">
    {/* Header */}
    <Header/>
    {/* Main */}
    <div id="main">
      {/* Intro */}
      <Intro/>
      {/* Work */}
     <Work/>
      {/* About */}
      <About/>
      {/* Contact */}
      <Contact/>
    </div>
    {/* Footer */}
    <Footer/>
  </div>
  {/* BG */}
  <div id="bg" />
</div>;


     
    </div>
  );
}

export default App;
