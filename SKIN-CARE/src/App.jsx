import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
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

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
          <Navbar />
          <Routes>
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
            <Route path="/bootcamps" element={<Bootcamps/>} />
            <Route path="/meetup" element={<MeetupEvents/>} />

            
          </Routes>
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;