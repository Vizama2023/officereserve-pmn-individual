// src/pages/Reservas.js
import React, { useState } from 'react';

export default function Reservas() {
  // Definir lista de espacios disponibles
  const espaciosDisponibles = [
    { id: 1, nombre: 'Sala A' },
    { id: 2, nombre: 'Sala B' },
    { id: 3, nombre: 'Sala C' },
    { id: 4, nombre: 'Auditorio' },
    { id: 5, nombre: 'Sala de Conferencias' }
  ];

  const [espacio, setEspacio] = useState(''); // Espacio seleccionado
  const [fecha, setFecha] = useState(''); // Fecha seleccionada
  const [reservas, setReservas] = useState([]); // Estado para manejar las reservas previas

  // Función para manejar el formulario de reserva
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!espacio || !fecha) {
      alert('Por favor, selecciona un espacio y una fecha');
      return;
    }

    // Crear objeto de reserva
    const nuevaReserva = { espacio, fecha };

    // Guardar en el estado y en localStorage
    const reservasPrevias = JSON.parse(localStorage.getItem('reservas')) || [];
    const nuevasReservas = [...reservasPrevias, nuevaReserva];
    localStorage.setItem('reservas', JSON.stringify(nuevasReservas));

    // Actualizar el estado con la nueva reserva
    setReservas(nuevasReservas);

    // Limpiar campos del formulario
    setEspacio('');
    setFecha('');

    alert(`Reserva creada para ${espacio} el día ${fecha} ✅`);
  };

  // Cargar reservas desde localStorage al inicio
  React.useEffect(() => {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(reservasGuardadas);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pantalla de Reservas</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Espacio:</label><br />
          <select
            value={espacio}
            onChange={(e) => setEspacio(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Selecciona un espacio</option>
            {espaciosDisponibles.map((espacio) => (
              <option key={espacio.id} value={espacio.nombre}>
                {espacio.nombre}
              </option>
            ))}
          </select>
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
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Reservar
        </button>
      </form>

      <h2>Mis Reservas</h2>
      <ul>
        {reservas.length === 0 ? (
          <p>No tienes reservas.</p>
        ) : (
          reservas.map((reserva, index) => (
            <li key={index}>
              {reserva.espacio} - {reserva.fecha}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}