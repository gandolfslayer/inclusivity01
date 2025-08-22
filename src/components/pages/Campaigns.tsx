import React, { useState } from 'react';
import { Plus, Mail, Users, TrendingUp, Calendar, Play, Pause, MoreHorizontal } from 'lucide-react';

const Campaigns: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      status: 'Active',
      type: 'Promotional',
      recipients: 12453,
      sent: '2024-01-15',
      openRate: 24.8,
      clickRate: 5.2,
      revenue: '$15,230'
    },
    {
      id: 2,
      name: 'Product Launch Newsletter',
      status: 'Scheduled',
      type: 'Announcement',
      recipients: 8901,
      sent: '2024-01-20',
      openRate: 0,
      clickRate: 0,
      revenue: '$0'
    },
    {
      id: 3,
      name: 'Welcome Series - Part 1',
      status: 'Active',
      type: 'Automation',
      recipients: 3421,
      sent: '2024-01-10',
      openRate: 32.1,
      clickRate: 8.7,
      revenue: '$8,450'
    },
    {
      id: 4,
      name: 'Customer Feedback Survey',
      status: 'Completed',
      type: 'Survey',
      recipients: 5678,
      sent: '2024-01-05',
      openRate: 18.9,
      clickRate: 12.3,
      revenue: '$0'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'text-green-700 bg-green-100',
      'Scheduled': 'text-blue-700 bg-blue-100',
      'Completed': 'text-gray-700 bg-gray-100',
      'Paused': 'text-yellow-700 bg-yellow-100'
    };
    return colors[status as keyof typeof colors] || 'text-gray-700 bg-gray-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Campaigns</h1>
          <p className="text-gray-600 mt-1">Create, manage, and track your email marketing campaigns</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Templates
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Campaign</span>
          </button>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">47</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Recipients</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">89.2K</p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Open Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">24.8%</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-100">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue Generated</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">$23.7K</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-100">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {['all', 'active', 'scheduled', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab} Campaigns
              </button>
            ))}
          </nav>
        </div>

        {/* Campaign List */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sent Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                      <div className="text-sm text-gray-500">{campaign.type}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.recipients.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.openRate > 0 ? `${campaign.openRate}%` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.clickRate > 0 ? `${campaign.clickRate}%` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {campaign.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.sent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      {campaign.status === 'Active' ? (
                        <button className="text-orange-600 hover:text-orange-900">
                          <Pause className="h-4 w-4" />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900">
                          <Play className="h-4 w-4" />
                        </button>
                      )}
                      <button className="text-blue-600 hover:text-blue-900">
                        <Calendar className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;