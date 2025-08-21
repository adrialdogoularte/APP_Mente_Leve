import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Autoavaliacao from './components/Autoavaliacao';
import RegistroHumor from './components/RegistroHumor';
import Dicas from './components/Dicas';
import Agendamento from './components/Agendamento';
import Suporte from './components/Suporte';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/autoavaliacao" element={<Autoavaliacao />} />
          <Route path="/registro-humor" element={<RegistroHumor />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/suporte" element={<Suporte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

