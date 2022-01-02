import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from '../src/components/Dashboard/Dashboard'
import Preferences from '../src/components/Preferences/Preferences'
import Login from '../src/components/Login/Login'

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
        <Route path="dashboard" element={
        <Dashboard /> 
        } />
        <Route path="preferences" element={
        <Preferences /> 
        } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
