import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">AutoParts</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Главная</Link>
        <Link to="/catalog" className="hover:text-yellow-400">Каталог</Link>
      </nav>
    </header>
  );
}

export default Header;
