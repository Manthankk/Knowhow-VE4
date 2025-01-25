import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



const ProductPage = () => {
    const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const initiatePayment = async () => {
    try {
      const orderResponse = await axios.post('http://localhost:8080/api/payments/create-order', {
        amount: product.price,
      });

      const { orderId, amount, currency } = orderResponse.data;

      const options = {
        key: 'rzp_test_Za3awYRVbhcLuv',
        amount: amount,
        currency: currency,
        order_id: orderId,
        handler: async (response) => {
          await handlePaymentSuccess(response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9876543210',
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Payment initiation failed. Please try again.');
    }
  };

  const handlePaymentSuccess = async (response) => {
    try {
      const payload = {
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
      };

      // const verificationResponse = await axios.post(
      //   // 'http://localhost:8080/api/payments/verify-payment',
      //   payload
      // );

      // console.log('Payment verification response:', verificationResponse.data);
        // alert('Payment verified successfully!');
      navigate('/order-success');
    } catch (error) {
      // console.error('Payment verification failed:', error);
      // alert('Payment verification failed. Please contact support.');
    }
  };

  const handlePurchase = () => {
    initiatePayment();
  };


  useEffect(() => {

    const fetchProduct = async () => {

      try {
        const response = await axios.get(`http://localhost:8081/products/${id}`); // Replace with your API endpoint
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.productName}</h1>
          <p className="text-gray-600 text-sm mb-2">
            Category: <span className="font-medium">{product.category}</span>
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Brand: <span className="font-medium">{product.brandName}</span>
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Size: <span className="font-medium">{product.size}</span>
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Expiry Date: <span className="font-medium">{product.expDate}</span>
          </p>
          <p className="text-gray-600 text-sm mb-6">
            Dosage: <span className="font-medium">{product.dosage}</span>
          </p>
          <p className="text-lg font-semibold text-green-600 mb-6">Price: Rs {product.price}</p>
          <div className="flex space-x-4">
            <button onClick={() => addToCart(product)} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              Add to Cart
            </button>
            <button onClick={handlePurchase}  className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Product Ingredients */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.ingredients.split(', ').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Additional Information */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h2>
        <p className="text-gray-700">Free shipping on orders over Rs.500</p>
        <p className="text-gray-700">24/7 Customer Support: +1-800-123-4567</p>
        <p className="text-gray-700">1-Year Manufacturer Warranty</p>
        <p className="text-gray-700">Delivery: 3 - 5 Business Days</p>
      </div>
    </div>
  );
};

export default ProductPage;
