import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      localStorage.setItem("role", "user");
      setIsSubmitting(false);

      navigate("/"); 
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-green-400">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white/10  rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-white/20 "
      >
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Email Address
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChanges}
              required
              className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-white/50 bg-white/10 text-white transition-all duration-200 hover:shadow-md hover:border-blue-400"
              placeholder="Enter your email"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Password
            </label>
            <motion.input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChanges}
              required
              className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-white/50 bg-white/10 text-white transition-all duration-200 hover:shadow-md hover:border-blue-400"
              placeholder="Enter your password"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </form>
        <p className="mt-6 text-sm text-center text-white/80">
          Don’t have an account?{" "}
          <motion.button
            onClick={() => navigate("/user-register")}
            className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register here
          </motion.button>
        </p>
      </motion.div>
    </div>
  );
};

export default UserLogin;