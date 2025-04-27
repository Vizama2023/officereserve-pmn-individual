import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de páginas
import Login from './pages/Login';
import PanelUsuario from './pages/PanelUsuario';
import Reservas from './pages/Reservas';
import Disponibilidad from './pages/Disponibilidad';
import AdminEspacios from './pages/AdminEspacios';

// Importación de componentes
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/panel" element={<PanelUsuario />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/disponibilidad" element={<Disponibilidad />} />
            <Route path="/admin" element={<AdminEspacios />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
