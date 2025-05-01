import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // Estados para manejar el correo y la contraseña ingresados por el usuario
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  // Estado para alternar entre formulario de inicio de sesión y creación de cuenta
  const [esNuevoUsuario, setEsNuevoUsuario] = useState(false);

  // Hook para redireccionar programáticamente
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple: si ambos campos están llenos
    if (correo && clave) {
      // Guardar el correo del usuario en el almacenamiento local del navegador
      localStorage.setItem('usuario', JSON.stringify({ correo }));

      // Mostrar mensaje de éxito
      alert('Inicio de sesión exitoso!');

      // Redirigir al usuario al panel
      navigate('/panel');
    } else {
      // Mostrar advertencia si faltan datos
      alert('Por favor, ingresa tus credenciales');
    }
  };

  // Función para cambiar entre "Iniciar Sesión" y "Crear Cuenta"
  const toggleForm = () => {
    setEsNuevoUsuario(!esNuevoUsuario);
    setCorreo('');
    setClave('');
  };

  // Renderizado del formulario
  return (
    <div style={{
      maxWidth: 400,
      margin: '50px auto',
      padding: 20,
      border: '1px solid #ccc',
      borderRadius: 10
    }}>
      <h2 style={{ textAlign: 'center' }}>
        {esNuevoUsuario ? 'Crear Cuenta' : 'Iniciar Sesión'}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Campo para ingresar correo */}
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

        {/* Campo para ingresar contraseña */}
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

        {/* Botón de enviar */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: 5
          }}
        >
          {esNuevoUsuario ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </button>
      </form>

      {/* Enlace para alternar entre formularios */}
      <p style={{ textAlign: 'center', marginTop: 10 }}>
        {esNuevoUsuario ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
        <span
          onClick={toggleForm}
          style={{ color: '#1976d2', cursor: 'pointer' }}
        >
          {esNuevoUsuario ? 'Iniciar sesión' : 'Crear cuenta'}
        </span>
      </p>
    </div>
  );
};

export default Login;
