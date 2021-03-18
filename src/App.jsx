import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home.jsx';
import About from './contents/About';
import Education from './contents/Education';
import Contact from './contents/Contact';
import Experience from './contents/Experience';
import Resume from './contents/Resume';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/education">
    <Education />
    </Route>
    <Route path="/experience">
    <Experience />
    </Route>
    <Route path="/resume">
    <Resume />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;
