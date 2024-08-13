import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dash from './pages/Dash';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dash" element={<Dash/>} />
        <Route path="/" element={<Dash/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
