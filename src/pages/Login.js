import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [esNuevoUsuario, setEsNuevoUsuario] = useState(false); // Estado para crear cuenta
  const navigate = useNavigate(); // Hook para redireccionar

  // Función para manejar el formulario de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar lógica para validar si el usuario existe y las credenciales son correctas.
    if (correo && clave) {
      alert('Inicio de sesión exitoso!');
      navigate('/panel'); // Redirigir al panel del usuario después de iniciar sesión
    } else {
      alert('Por favor, ingresa tus credenciales');
    }
  };

  // Alternar entre "Iniciar sesión" y "Crear cuenta"
  const toggleForm = () => {
    setEsNuevoUsuario(!esNuevoUsuario);
    setCorreo('');
    setClave('');
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2 style={{ textAlign: 'center' }}>
        {esNuevoUsuario ? 'Crear Cuenta' : 'Iniciar Sesión'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10, backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: 5 }}>
          {esNuevoUsuario ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: 10 }}>
        {esNuevoUsuario ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
        <span onClick={toggleForm} style={{ color: '#1976d2', cursor: 'pointer' }}>
          {esNuevoUsuario ? 'Iniciar sesión' : 'Crear cuenta'}
        </span>
      </p>
    </div>
  );
};

export default Login;
