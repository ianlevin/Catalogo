import React from 'react';
import Link from 'next/link';

const Home = () => {
  // Simulación de productos
  const products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
    { id: 4, name: 'Producto 4' },
    { id: 5, name: 'Producto 5' },
    { id: 6, name: 'Producto 6' },
  ];

  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>

      {/* Carousel con imágenes random */}
      <div>
        <h2>Imágenes Destacadas</h2>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Imagen 1" />
          <img src="https://via.placeholder.com/600x300" alt="Imagen 2" />
          <img src="https://via.placeholder.com/600x300" alt="Imagen 3" />
        </div>
      </div>

      <h2>Productos Destacados</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <Link key={product.id} href={`/detalle-producto/${product.id}`}>
            <div style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }}>
              <h3>{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
