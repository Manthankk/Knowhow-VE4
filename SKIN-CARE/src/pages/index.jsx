import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Camera, Users, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-wellness-purple to-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center animate-fade-down">
        <h1 className="text-2xl font-bold text-primary">SkinWellness</h1>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/vendor-login">Vendor Login</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center animate-fade-up">
        <h2 className="text-5xl font-bold mb-8">Your Journey to Healthy Skin Starts Here</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Advanced AI-powered skin disease prediction combined with natural remedies and expert community support.
        </p>
        <Button size="lg" className="mr-4">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
            <Camera className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Prediction</h3>
            <p className="text-gray-600">
              Upload or capture photos for instant skin condition analysis
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:200ms]">
            <ShoppingCart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Natural Products</h3>
            <p className="text-gray-600">
              Browse curated Ayurvedic and homeopathic remedies
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:400ms]">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Hub</h3>
            <p className="text-gray-600">
              Join workshops, forums, and events with skin health experts
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up [animation-delay:600ms]">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Holistic Care</h3>
            <p className="text-gray-600">
              Personalized wellness plans combining modern and traditional approaches
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wellness-green py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Skin Health?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have discovered their path to healthier skin through our platform.
          </p>
          <Button size="lg" className="animate-fade-up">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>Our Story</li>
                <li>How It Works</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>Ayurvedic</li>
                <li>Homeopathic</li>
                <li>Wellness Kits</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>Events</li>
                <li>Forums</li>
                <li>Workshops</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 SkinWellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;