// components/ProductCard.jsx
import React from 'react';

function ProductCard({ brand, description, image }) {
  return (
    <div className="bg-white p-4 shadow rounded text-center">
      <img src={image} alt={brand} className="h-24 mx-auto mb-2" />
      <h3 className="text-lg font-bold">{brand}</h3>
      <p className="text-sm">{description}</p>
      <button className="mt-4 border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition">
        Подробнее
      </button>
    </div>
  );
}

export default ProductCard;
