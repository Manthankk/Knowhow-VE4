import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function RetailerDashboard() {
  const location = useLocation();

  return (
    <div className="min-h-screen ">
      <nav className="bg-gradient-to-l  from-teal-400 to-teal-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Retailer Dashboard</div>
            <div className="flex space-x-4">
              <Link
                to="/products"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.includes('/products')
                    ? 'bg-teal-700'
                    : 'hover:bg-teal-500'
                }`}
              >
                Products
              </Link>
              <Link
                to="/orders"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname.includes('/orders')
                    ? 'bg-teal-700'
                    : 'hover:bg-teal-500'
                }`}
              >
                Orders
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6 mt-5 bg-white rounded-md shadow-lg border border-green-200">
        <Outlet />
      </main>
    </div>
  );
}