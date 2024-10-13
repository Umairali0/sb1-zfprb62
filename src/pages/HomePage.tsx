import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Layers, BarChart2, Truck } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Build Your E-commerce Empire in Pakistan</h1>
          <p className="text-xl text-indigo-100 mb-8">Create, manage, and grow your online store with ease</p>
          <Link to="/dashboard" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">
            Get Started
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <FeatureCard
            icon={<ShoppingBag className="h-12 w-12 mb-4" />}
            title="Easy Store Setup"
            description="Launch your online store in minutes with our intuitive builder"
          />
          <FeatureCard
            icon={<Layers className="h-12 w-12 mb-4" />}
            title="Beautiful Themes"
            description="Choose from a variety of professionally designed themes"
          />
          <FeatureCard
            icon={<BarChart2 className="h-12 w-12 mb-4" />}
            title="Powerful Analytics"
            description="Gain insights into your sales and customer behavior"
          />
          <FeatureCard
            icon={<Truck className="h-12 w-12 mb-4" />}
            title="Integrated Shipping"
            description="Seamless integration with Pakistani shipping providers"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-indigo-100">{description}</p>
    </div>
  );
};

export default HomePage;