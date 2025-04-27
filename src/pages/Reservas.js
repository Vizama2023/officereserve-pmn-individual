// src/pages/Reservas.js
import React, { useState } from 'react';

export default function Reservas() {
  const [espacio, setEspacio] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva creada para ${espacio} el día ${fecha} ✅`);
    setEspacio('');
    setFecha('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pantalla de Reservas</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Espacio:</label><br />
          <input
            type="text"
            value={espacio}
            onChange={(e) => setEspacio(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Fecha:</label><br />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }}>
          Reservar
        </button>
      </form>
    </div>
  );
}
