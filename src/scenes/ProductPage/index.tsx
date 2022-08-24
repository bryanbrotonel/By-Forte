import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const params = useParams();

  return (
    <div className="container">
      <h1>Product Page</h1>
      <p>{params.id}</p>
    </div>
  );
}

export default ProductPage;
