import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, Users, CreditCard, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<ShoppingBag />} title="Total Sales" value="Rs. 150,000" change="+12%" />
        <StatCard icon={<Package />} title="Orders" value="48" change="+5%" />
        <StatCard icon={<Users />} title="Customers" value="256" change="+8%" />
        <StatCard icon={<CreditCard />} title="Revenue" value="Rs. 75,000" change="+15%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          {/* Add a table or list of recent orders here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Products</h2>
          {/* Add a list or chart of top products here */}
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; change: string }> = ({ icon, title, value, change }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-indigo-100 p-3 rounded-full">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6 text-indigo-600' })}
        </div>
        <span className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default Dashboard;