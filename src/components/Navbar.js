// src/components/Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
      <Link to="/">Login</Link> | 
      <Link to="/panel">Panel</Link> | 
      <Link to="/reservas">Reservas</Link> | 
      <Link to="/disponibilidad">Disponibilidad</Link> | 
      <Link to="/admin">Admin Espacios</Link>
    </nav>
  );
}
