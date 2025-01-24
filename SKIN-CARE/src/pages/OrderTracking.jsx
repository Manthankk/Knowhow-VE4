import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

const OrderTracking = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Tracking</h1>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="text-center py-8">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No orders to track</p>
          <button className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;