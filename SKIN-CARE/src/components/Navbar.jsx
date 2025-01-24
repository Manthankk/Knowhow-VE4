import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-100 to-teal-50 shadow-lg"> {/* Light gradient background */}
      <div className="max-w-8xl mx-auto px-7">
        <div className="flex justify-between items-center h-24"> {/* Increased height */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-4xl font-bold text-teal-800">HomoConnect</span> {/* Darker text for contrast */}
          </Link>
          
          <div className="hidden md:flex items-center space-x-16"> {/* Increased spacing */}
            <Link to="/dashboard" className="text-xl text-teal-800 hover:text-teal-600 transition font-bold">Dashboard</Link> {/* Darker text */}
            <Link to="/products" className="text-xl text-teal-800 hover:text-teal-600 transition font-bold">Products</Link> {/* Darker text */}
            <Link to="/community" className="text-xl text-teal-800 hover:text-teal-600 transition font-bold">Community</Link> {/* Darker text */}
            <Link to="/prediction" className="text-xl text-teal-800 hover:text-teal-600 transition font-bold">Skin Analysis</Link> {/* Darker text */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-8 w-8 text-teal-800 hover:text-teal-600 transition" /> {/* Darker icon */}
            </Link>
            <Link to="/health-profile">
              <User className="h-8 w-8 text-teal-800 hover:text-teal-600 transition" /> {/* Darker icon */}
            </Link>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-8 w-8 text-teal-800" /> {/* Darker icon */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;