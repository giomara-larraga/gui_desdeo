import React from 'react';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './components/Dashboard';
import './style/desdeo_template.scss'

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
