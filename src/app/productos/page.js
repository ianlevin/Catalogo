import React, { useState } from 'react';

const Productos = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(''); // Para filtro de categoría

  const products = [
    { id: 1, name: 'Producto 1', category: 'A' },
    { id: 2, name: 'Producto 2', category: 'B' },
    // Más productos
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? product.category === category : true)
  );

  return (
    <div className={styles.container}>
      <h1>Catálogo de Productos</h1>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.filterSelect}>
        <option value="">Todas las Categorías</option>
        <option value="A">Categoría A</option>
        <option value="B">Categoría B</option>
        {/* Más opciones */}
      </select>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
