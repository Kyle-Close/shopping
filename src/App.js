import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"

import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
