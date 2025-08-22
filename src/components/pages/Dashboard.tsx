import React from 'react';
import { TrendingUp, Users, Mail, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import MetricCard from '../ui/MetricCard';
import ChartContainer from '../ui/ChartContainer';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Leads',
      value: '12,453',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Email Open Rate',
      value: '24.8%',
      change: '+3.2%',
      trend: 'up' as const,
      icon: Mail,
      color: 'green'
    },
    {
      title: 'Conversion Rate',
      value: '8.2%',
      change: '-1.1%',
      trend: 'down' as const,
      icon: Target,
      color: 'orange'
    },
    {
      title: 'Revenue',
      value: '$47,892',
      change: '+18.3%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const recentCampaigns = [
    { name: 'Summer Sale 2024', status: 'Active', opens: 2847, clicks: 382, conversion: '13.4%' },
    { name: 'Product Launch', status: 'Completed', opens: 1923, clicks: 298, conversion: '15.5%' },
    { name: 'Newsletter #47', status: 'Active', opens: 3421, clicks: 445, conversion: '13.0%' },
    { name: 'Welcome Series', status: 'Active', opens: 892, clicks: 127, conversion: '14.2%' }
  ];

  const topLeads = [
    { name: 'Acme Corp', score: 95, stage: 'Qualified', value: '$12,500' },
    { name: 'TechStart Inc', score: 88, stage: 'Proposal', value: '$8,900' },
    { name: 'Global Solutions', score: 82, stage: 'Demo', value: '$15,200' },
    { name: 'Innovation Labs', score: 76, stage: 'Contacted', value: '$6,700' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Marketing Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your marketing campaigns.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title="Campaign Performance" 
          subtitle="Last 30 days"
          data={[
            { name: 'Week 1', emails: 4000, clicks: 240, conversions: 24 },
            { name: 'Week 2', emails: 3000, clicks: 139, conversions: 18 },
            { name: 'Week 3', emails: 2000, clicks: 98, conversions: 12 },
            { name: 'Week 4', emails: 2780, clicks: 139, conversions: 20 }
          ]}
        />
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Lead Sources</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Organic Search</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">45.2%</div>
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +2.3%
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Social Media</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">28.7%</div>
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +5.1%
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Email Marketing</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">18.9%</div>
                <div className="text-xs text-red-600 flex items-center">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  -1.2%
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Paid Ads</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">7.2%</div>
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +0.8%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Campaigns */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Campaigns</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opens</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CVR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentCampaigns.map((campaign) => (
                  <tr key={campaign.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{campaign.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        campaign.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{campaign.opens.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{campaign.conversion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Leads */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Top Qualified Leads</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topLeads.map((lead) => (
                <div key={lead.name} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">
                          {lead.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.stage}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{lead.value}</div>
                    <div className="text-sm text-gray-500">Score: {lead.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;