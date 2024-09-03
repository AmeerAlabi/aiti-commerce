import React from 'react';
import ProductList from './ProductList';

function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My Product List</h1>
      <ProductList />
    </div>
  );
}

export default App;
