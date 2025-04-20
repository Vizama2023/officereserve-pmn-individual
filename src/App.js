import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PanelUsuario from './pages/PanelUsuario';
import Reservas from './pages/Reservas';
import Disponibilidad from './pages/Disponibilidad';
import AdminEspacios from './pages/AdminEspacios';
import Navbar from './components/Navbar'; // ✅ ya está bien importado

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ aquí usas el componente */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<PanelUsuario />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/disponibilidad" element={<Disponibilidad />} />
        <Route path="/admin" element={<AdminEspacios />} />
      </Routes>
    </Router>
  );
}

export default App;
