import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-b-0">
      <h2 className="text-xl font-semibold text-gray-700">{product.name}</h2>
      <p className="text-gray-600">Price: ${product.price}</p>
      {product.available ? (
        <p className="text-green-600">Status: In Stock</p>
      ) : (
        <p className="text-red-600">Status: Out of Stock</p>
      )}
    </div>
  );
}

export default ProductItem;
