import React, { useEffect, useState } from 'react';

export default function PanelUsuario() {
  // Estado para guardar el usuario
  const [usuario, setUsuario] = useState(null);

  // Cargar el correo del usuario desde localStorage al montar el componente
  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioGuardado) {
      setUsuario(usuarioGuardado);
    }
  }, []);

  // Lista de reservas de ejemplo
  const reservas = [
    { espacio: 'Sala A', fecha: '2025-05-01' },
    { espacio: 'Sala B', fecha: '2025-05-10' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenido al Panel de Usuario</h1>

      {/* Mostrar correo si existe */}
      {usuario && (
        <p><strong>Correo:</strong> {usuario.correo}</p>
      )}

      <p>¡Has iniciado sesión con éxito!</p>
      <p>Desde aquí podrás gestionar tus reservas y más.</p>

      <h2>Mis Reservas</h2>
      <ul>
        {reservas.map((reserva, index) => (
          <li key={index}>
            {reserva.espacio} - {reserva.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}
