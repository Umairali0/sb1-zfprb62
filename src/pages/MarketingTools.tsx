import React, { useState } from 'react';
import { Mail, Tag, BarChart2 } from 'lucide-react';

const MarketingTools: React.FC = () => {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Summer Sale', type: 'Email', status: 'Active', sent: 1000, opened: 450, clicked: 200 },
    { id: 2, name: 'New Product Launch', type: 'SMS', status: 'Scheduled', sent: 0, opened: 0, clicked: 0 },
    { id: 3, name: 'Customer Loyalty', type: 'Email', status: 'Completed', sent: 5000, opened: 2250, clicked: 1000 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Marketing Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MarketingCard
          icon={<Mail className="h-8 w-8 text-indigo-600" />}
          title="Email Campaigns"
          description="Create and manage email marketing campaigns"
        />
        <MarketingCard
          icon={<Tag className="h-8 w-8 text-indigo-600" />}
          title="Discount Codes"
          description="Generate and track discount codes for promotions"
        />
        <MarketingCard
          icon={<BarChart2 className="h-8 w-8 text-indigo-600" />}
          title="Campaign Analytics"
          description="Analyze the performance of your marketing efforts"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opened</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicked</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.sent}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.opened}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.clicked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MarketingCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default MarketingTools;