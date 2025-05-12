// src/pages/Disponibilidad.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Disponibilidad() {
  // Estado para guardar la fecha seleccionada
  const [fecha, setFecha] = useState(new Date());

  // Simulación de disponibilidad (puedes expandir esto con lógica real más adelante)
  const disponibilidadSimulada = {
    '2025-05-11': ['Sala de Reuniones', 'Laboratorio 1'],
    '2025-05-12': ['Auditorio'],
  };

  // Formatea fecha a formato YYYY-MM-DD
  const formatearFecha = (fecha) => {
    return fecha.toISOString().split('T')[0];
  };

  const espaciosDisponibles = disponibilidadSimulada[formatearFecha(fecha)] || [];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Disponibilidad de Espacios</h1>
      <p>Selecciona una fecha para ver qué espacios están disponibles.</p>

      <Calendar
        onChange={setFecha}
        value={fecha}
        minDate={new Date()} // No permite fechas pasadas
      />

      <div style={{ marginTop: '20px' }}>
        <h2>Fecha seleccionada: {fecha.toDateString()}</h2>
        <h3>Espacios disponibles:</h3>
        {espaciosDisponibles.length > 0 ? (
          <ul>
            {espaciosDisponibles.map((esp, index) => (
              <li key={index}>{esp}</li>
            ))}
          </ul>
        ) : (
          <p style={{ color: 'gray' }}>No hay espacios disponibles para esta fecha.</p>
        )}
      </div>
    </div>
  );
}
