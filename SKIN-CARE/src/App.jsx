import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext'; 
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import BrowseProducts from './pages/BrowseProducts';
import CommunityHub from './pages/CommunityHub';
import Prediction from './pages/Prediction';
import Cart from './pages/Cart';
import OrderTracking from './pages/OrderTracking';
import HealthProfile from './pages/HealthProfile';
import LiveWorkshops from './pages/LiveWorkshops';
import DiscussionForum from './pages/DiscussionForum';
import Bootcamps from './pages/Bootcamps';
import MeetupEvents from './pages/MeetupEvents';
import RetailerDashboard from './pages/retailer/RetailerDashboard';
import Products from './pages/retailer/Products';
import Orders from './pages/retailer/Orders';
import RetailerDetails from './pages/retailer/RetailerDetails';
import RetailerLogin from './pages/retailer/RetailerLogin';
import RetailerRegister from './pages/retailer/RetailerRegister';
import Dashboard from './pages/Dashboard';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';

function App() {
  const isRetailer = true; 
  const location = useLocation(); 
  const role = localStorage.getItem("role");
  const noNavbarRoutes = [
    '/user-login',
    '/user-register', 
    '/retailer-login',
    '/retailer-register',
  ];

  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <AnimatePresence mode="wait">
      {role === "retailer" ? (
        <Routes>
          <Route path="/retailer-login" element={<RetailerLogin />} />
          <Route path="/retailer-register" element={<RetailerRegister />} />
          <Route path="/retailer-details" element={<RetailerDetails />} />
          <Route path="/" element={<RetailerDashboard />}>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
          {shouldShowNavbar && <Navbar />}

          <Routes>
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/user-register" element={<UserRegister />} /> 
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<BrowseProducts />} />
            <Route path="/community" element={<CommunityHub />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<OrderTracking />} />
            <Route path="/health-profile" element={<HealthProfile />} />
            <Route path="/live-workshops" element={<LiveWorkshops />} />
            <Route path="/discussion-forum" element={<DiscussionForum />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/meetup" element={<MeetupEvents />} />
          </Routes>
        </div>
      )}
    </AnimatePresence>
  );
}


export default App;