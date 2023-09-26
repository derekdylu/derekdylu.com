import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Home from './Containers/Home/Home';
import Contact from './Containers/Contact/Contact';
import Publications from './Containers/Publications/Publications';
import Projects from './Containers/Projects/Projects';
import Error from './Containers/Error/Error';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>      
    </>
  );
}

export default App;
