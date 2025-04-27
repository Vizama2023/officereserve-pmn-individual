// src/pages/PanelUsuario.js
import React from 'react';

export default function PanelUsuario() {
  // Lista de reservas de ejemplo
  const reservas = [
    { espacio: 'Sala A', fecha: '2025-05-01' },
    { espacio: 'Sala B', fecha: '2025-05-10' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenido al Panel de Usuario</h1>
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
