import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics: React.FC = () => {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const visitorData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visitors',
        data: [500, 600, 750, 800, 700, 900, 1000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
          <Bar data={salesData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Weekly Visitors</h2>
          <Line data={visitorData} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticCard title="Total Revenue" value="Rs. 150,000" change="+12%" />
        <AnalyticCard title="Orders" value="256" change="+5%" />
        <AnalyticCard title="Customers" value="1,024" change="+8%" />
        <AnalyticCard title="Avg. Order Value" value="Rs. 585" change="+3%" />
      </div>
    </div>
  );
};

const AnalyticCard: React.FC<{ title: string; value: string; change: string }> = ({ title, value, change }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change} from last month
      </p>
    </div>
  );
};

export default Analytics;