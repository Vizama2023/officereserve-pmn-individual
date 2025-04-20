import React, { useState } from 'react';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de validación o autenticación
    console.log('Correo:', correo);
    console.log('Contraseña:', clave);
    alert('Inicio de sesión simulado 😎');
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
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
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
