import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShoppingBag, Users, Camera } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome Back!</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/prediction" 
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition group">
          <Camera className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-600">Skin Analysis</h3>
          <p className="text-gray-600">Get instant AI-powered skin condition analysis</p>
        </Link>

        <Link to="/products" 
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition group">
          <ShoppingBag className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-600">Browse Products</h3>
          <p className="text-gray-600">Explore our natural remedies collection</p>
        </Link>

        <Link to="/community" 
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition group">
          <Users className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-600">Community</h3>
          <p className="text-gray-600">Join events and connect with others</p>
        </Link>

        <Link to="/health-profile" 
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition group">
          <Activity className="h-8 w-8 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-600">Health Profile</h3>
          <p className="text-gray-600">View and update your health information</p>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Orders</h2>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-center text-gray-500 py-8">
            No orders yet. Start shopping to see your orders here!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;