// src/components/Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        Officereserve
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Login</Link>
        <Link to="/panel" style={styles.link}>Panel</Link>
        <Link to="/reservas" style={styles.link}>Reservas</Link>
        <Link to="/disponibilidad" style={styles.link}>Disponibilidad</Link>
        <Link to="/admin" style={styles.link}>Admin Espacios</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1976d2',
    padding: '10px 30px',
    color: 'white',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  }
};
