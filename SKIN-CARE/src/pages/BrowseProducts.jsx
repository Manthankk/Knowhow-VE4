import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Neem Face Wash',
    price: 24.99,
    description: 'Natural antibacterial face wash with neem extract',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Aloe Vera Gel',
    price: 19.99,
    description: 'Pure aloe vera gel for skin soothing',
    image: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'Turmeric Face Mask',
    price: 29.99,
    description: 'Traditional turmeric-based face mask',
    image: 'https://images.unsplash.com/photo-1614859324967-3df02391aa3f?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 4,
    name: 'Herbal Hair Oil',
    price: 34.99,
    description: 'Blend of natural oils for hair health',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=300&q=80'
  }
];

const BrowseProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Natural Remedies</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-teal-600">${product.price}</span>
                <button className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProducts;