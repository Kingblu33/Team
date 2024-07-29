import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dash from './pages/Dash';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dash" element={<Dash/>} />
        <Route path="/" element={<Dash/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
