'use client'
import React from 'react';

// El componente recibe 'params' directamente como props
const DetalleProducto = ({ params }) => {
  const { id } = params; // Extraemos el 'id' de los params

  if (!id) return <p>Cargando...</p>;

  // Simulación de datos de producto
  const product = {
    id,
    name: `Producto ${id}`,
    description: 'Descripción detallada...',
    images: [], // Aquí puedes agregar las imágenes simuladas o reales
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Aquí puedes agregar más contenido, como imágenes */}
    </div>
  );
};

export default DetalleProducto;
