import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RetailerDashboard from './pages/retailer/RetailerDashboard';
import Products from './pages/retailer/Products';
import Orders from './pages/retailer/Orders';
import RetailerLogin from './pages/retailer/RetailerLogin';
import RetailerRegister from './pages/retailer/RetailerRegister';

function RetailerRouter() {
  return (
    <Router>
      <AnimatePresence mode="wait">
          <Routes>           
            <Route path="/retailer-login" element={<RetailerLogin />} />
            <Route path="/retailer-register" element={<RetailerRegister />} />
            <Route path="/retailer-dashboard" element={<RetailerDashboard />}>
              <Route index element={<Navigate to="/retailer-dashboard/products" replace />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default RetailerRouter;