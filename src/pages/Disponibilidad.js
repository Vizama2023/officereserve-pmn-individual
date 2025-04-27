// src/pages/Disponibilidad.js
import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';

export default function Disponibilidad() {
  const [fecha, setFecha] = useState(new Date());

  const handleChange = (newDate) => {
    setFecha(newDate);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Disponibilidad de Espacios</h1>
      <p>Selecciona una fecha para ver la disponibilidad.</p>
      <Calendar
        onChange={handleChange}
        value={fecha}
        minDate={new Date()} // Evita que se elijan fechas pasadas
      />
      <div style={{ marginTop: '20px' }}>
        <h2>Fecha seleccionada: {fecha.toDateString()}</h2>
      </div>
    </div>
  );
}
