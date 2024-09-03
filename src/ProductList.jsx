import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, available: true },
  { id: 2, name: 'Product 2', price: 49.99, available: false },
  { id: 3, name: 'Product 3', price: 19.99, available: true },
];

function ProductList() {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
