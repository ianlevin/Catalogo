// Redirigir a la página 'home' o mostrar contenido inicial
import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <p>Ve a la <Link href="/home">página de inicio</Link> para ver los productos.</p>
    </div>
  );
};

export default Index;
