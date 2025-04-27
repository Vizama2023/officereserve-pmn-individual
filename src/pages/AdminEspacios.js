// src/pages/AdminEspacios.js
import React, { useState } from 'react';

export default function AdminEspacios() {
  const [espacios, setEspacios] = useState([]);
  const [nuevoEspacio, setNuevoEspacio] = useState('');

  const handleAgregarEspacio = () => {
    if (nuevoEspacio) {
      setEspacios([...espacios, nuevoEspacio]);
      setNuevoEspacio('');
    }
  };

  const handleEliminarEspacio = (espacio) => {
    setEspacios(espacios.filter((esp) => esp !== espacio));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestión de Espacios (Admin)</h1>
      <div>
        <input
          type="text"
          value={nuevoEspacio}
          onChange={(e) => setNuevoEspacio(e.target.value)}
          placeholder="Nuevo espacio"
          style={{ padding: '8px', width: '80%' }}
        />
        <button
          onClick={handleAgregarEspacio}
          style={{
            padding: '8px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            marginLeft: '10px',
          }}
        >
          Agregar Espacio
        </button>
      </div>
      <ul style={{ marginTop: '20px' }}>
        {espacios.map((espacio, index) => (
          <li key={index}>
            {espacio}{' '}
            <button
              onClick={() => handleEliminarEspacio(espacio)}
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                marginLeft: '10px',
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
