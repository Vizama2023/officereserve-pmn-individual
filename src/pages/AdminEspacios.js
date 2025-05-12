// src/pages/AdminEspacios.js
import React, { useEffect, useState } from 'react';

export default function AdminEspacios() {
  // Lista de espacios registrados
  const [espacios, setEspacios] = useState([]);

  // Campo de entrada para nuevo espacio
  const [nuevoEspacio, setNuevoEspacio] = useState('');

  // Mensajes informativos (errores o confirmaciones)
  const [mensaje, setMensaje] = useState('');

  // Cargar espacios desde localStorage cuando se monta el componente
  useEffect(() => {
    const datosGuardados = localStorage.getItem('espacios');
    if (datosGuardados) {
      setEspacios(JSON.parse(datosGuardados));
    } else {
      // Espacios iniciales si no hay nada guardado
      const iniciales = ['Sala de Reuniones', 'Auditorio', 'Laboratorio 1'];
      setEspacios(iniciales);
      localStorage.setItem('espacios', JSON.stringify(iniciales));
    }
  }, []);

  // Guardar los espacios actualizados en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('espacios', JSON.stringify(espacios));
  }, [espacios]);

  // Agrega un nuevo espacio a la lista si no está vacío ni repetido
  const handleAgregarEspacio = () => {
    const nombre = nuevoEspacio.trim();

    if (!nombre) {
      setMensaje('⚠️ El nombre del espacio no puede estar vacío.');
      return;
    }
    if (espacios.includes(nombre)) {
      setMensaje('❌ Ese espacio ya está registrado.');
      return;
    }

    setEspacios([...espacios, nombre]);
    setNuevoEspacio('');
    setMensaje('✅ Espacio agregado correctamente.');
  };

  // Elimina un espacio específico con confirmación
  const handleEliminarEspacio = (espacio) => {
    if (window.confirm(`¿Estás seguro de eliminar "${espacio}"?`)) {
      setEspacios(espacios.filter((e) => e !== espacio));
      setMensaje(`🗑️ Espacio "${espacio}" eliminado.`);
    }
  };

  // Limpia todos los espacios (opcional)
  const handleLimpiarTodo = () => {
    if (window.confirm('¿Seguro que deseas eliminar todos los espacios?')) {
      setEspacios([]);
      setMensaje('🚫 Todos los espacios han sido eliminados.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Administrar Espacios</h1>
      <p>Desde aquí puedes agregar, visualizar o eliminar espacios disponibles para reservas.</p>

      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h3>Agregar nuevo espacio</h3>
        <input
          type="text"
          value={nuevoEspacio}
          onChange={(e) => setNuevoEspacio(e.target.value)}
          placeholder="Ej: Sala de Innovación"
          style={{
            padding: '8px',
            width: '65%',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleAgregarEspacio}
          style={{
            padding: '8px 12px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Agregar
        </button>
      </div>

      {/* Mostrar mensaje de validación o éxito */}
      {mensaje && (
        <div style={{ marginBottom: '15px', color: '#444', fontStyle: 'italic' }}>
          {mensaje}
        </div>
      )}

      <h3>Espacios registrados ({espacios.length})</h3>

      {/* Lista de espacios disponibles */}
      {espacios.length > 0 ? (
        <ul style={{ paddingLeft: '20px' }}>
          {espacios.map((espacio, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {espacio}
              <button
                onClick={() => handleEliminarEspacio(espacio)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#d32f2f',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'gray' }}>No hay espacios registrados aún.</p>
      )}

      {/* Botón para eliminar todos (opcional en PMV) */}
      {espacios.length > 0 && (
        <button
          onClick={handleLimpiarTodo}
          style={{
            marginTop: '20px',
            backgroundColor: '#9e9e9e',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Eliminar todos los espacios
        </button>
      )}
    </div>
  );
}
