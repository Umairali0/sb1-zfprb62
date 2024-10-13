import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-800">PakShop Builder</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link></li>
            <li><Link to="/theme-customizer" className="text-gray-600 hover:text-indigo-600">Themes</Link></li>
            <li><Link to="/products" className="text-gray-600 hover:text-indigo-600">Products</Link></li>
            <li><Link to="/orders" className="text-gray-600 hover:text-indigo-600">Orders</Link></li>
            <li><Link to="/marketing" className="text-gray-600 hover:text-indigo-600">Marketing</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;