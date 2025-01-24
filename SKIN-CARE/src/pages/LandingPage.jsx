import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Camera, Star, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const LandingPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen font-poppins bg-gray-50"
    >
      <div className="relative bg-gradient-to-r from-teal-500 to-green-700 h-[800px] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" 
            alt="Ayurvedic herbs background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative">
          <motion.div 
            {...fadeIn}
            className="text-center text-white"
          >
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Your Journey to <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-teal-200">
                Natural Wellness
              </span>
            </h1>
            <p className="text-2xl mb-8 max-w-2xl mx-auto">
              Advanced skin disease prediction powered by AI, combined with natural Ayurvedic solutions for holistic healing and well-being
            </p>
            <Link 
              to="/prediction" 
              className="inline-flex items-center bg-white text-teal-700 px-10 py-4 rounded-full font-bold hover:bg-teal-50 transition transform hover:scale-105 shadow-lg"
            >
              Try Skin Analysis
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
      </div>

      <div className="relative bg-gradient-to-r from-teal-700 to-green-700 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1920&q=80" 
            alt="Ayurvedic background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/80 to-green-700/80"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            {...fadeIn} 
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-yellow-300">HomoConnect?</span>
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Experience the perfect blend of ancient wisdom and modern technology
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { icon: <Camera className="h-10 w-10 text-teal-700" />, title: "AI Skin Analysis", description: "Get instant analysis of skin conditions using our advanced AI technology", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80" },
              { icon: <Leaf className="h-10 w-10 text-teal-700" />, title: "Natural Solutions", description: "Access a wide range of Ayurvedic and homeopathic remedies", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80" },
              { icon: <Users className="h-10 w-10 text-teal-700" />, title: "Community Support", description: "Join workshops, forums, and events with like-minded individuals", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={hoverScale}
                className="text-center p-8 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow"
              >
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-teal-100 p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="mt-4 w-full h-56 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-teal-700 to-green-700 py-24 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f?auto=format&fit=crop&w=1920&q=80" 
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 text-center text-white relative z-10"
        >
          <h2 className="text-5xl font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of others who have discovered the power of natural healing with AyurCare
          </p>
          <Link 
            to="/health-profile" 
            className="inline-flex items-center bg-white text-teal-700 px-12 py-5 rounded-full font-bold hover:bg-teal-50 transition transform hover:scale-105 shadow-lg"
          >
            Create Your Health Profile
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LandingPage;