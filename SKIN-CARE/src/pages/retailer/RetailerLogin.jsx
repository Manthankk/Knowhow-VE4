import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RetailerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Vendor Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChanges}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 bg-gray-50"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChanges}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 bg-gray-50"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-500">
          Don’t have an account?
          <button
            onClick={() => navigate("/register")}
            className="text-purple-600 hover:underline"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default RetailerLogin;