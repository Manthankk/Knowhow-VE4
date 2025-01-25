// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios'; 

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, getCartTotal } = useContext(CartContext);

  const initiatePayment = async () => {
    const paymentAmount = getCartTotal() ; 
    try {
      const orderResponse = await axios.post('http://localhost:8080/api/payments/create-order', {
        amount: paymentAmount,
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

  const handleCheckout = () => {
    initiatePayment();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <button
                  onClick={() => navigate('/products')}
                  className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{item.productName}</h3>
                        {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
                        <span className="text-teal-600 font-bold">
                          Rs{item.price} x {item.quantity}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>Rs{getCartTotal().toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Rs0.</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>Rs0.</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>Rs{getCartTotal().toFixed(0)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;