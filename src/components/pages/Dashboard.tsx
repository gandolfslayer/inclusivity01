import React from 'react';
import { TrendingUp, Users, Mail, Target, ArrowUpRight, ArrowDownRight, Calendar, Eye, Heart, MessageCircle } from 'lucide-react';
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
      color: 'purple'
    },
    {
      title: 'Email Open Rate',
      value: '24.8%',
      change: '+3.2%',
      trend: 'up' as const,
      icon: Mail,
      color: 'blue'
    },
    {
      title: 'Conversion Rate',
      value: '8.2%',
      change: '-1.1%',
      trend: 'down' as const,
      icon: Target,
      color: 'pink'
    },
    {
      title: 'Revenue',
      value: '$47,892',
      change: '+18.3%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'green'
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

  const recentPosts = [
    { platform: 'Instagram', content: 'Check out our latest product features! 🚀', engagement: 324, time: '2h ago', status: 'Published' },
    { platform: 'Twitter', content: 'Marketing tip: Personalization increases email...', engagement: 156, time: '4h ago', status: 'Published' },
    { platform: 'LinkedIn', content: 'Thought leadership: The future of B2B marketing...', engagement: 89, time: '6h ago', status: 'Scheduled' },
    { platform: 'Facebook', content: 'Customer success story: How Company X increased...', engagement: 234, time: '8h ago', status: 'Published' }
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Good morning, Sarah! 👋</h1>
        <p className="text-gray-400 mt-1">Here's what's happening with your marketing campaigns today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-[#111111] rounded-2xl p-6 border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
            <Calendar className="h-6 w-6 mb-2" />
            <div className="text-sm font-medium">Schedule Post</div>
          </button>
          <button className="bg-[#1a1a1a] border border-gray-700 text-white p-4 rounded-xl hover:border-gray-600 transition-all duration-200">
            <Users className="h-6 w-6 mb-2" />
            <div className="text-sm font-medium">Add Lead</div>
          </button>
          <button className="bg-[#1a1a1a] border border-gray-700 text-white p-4 rounded-xl hover:border-gray-600 transition-all duration-200">
            <Mail className="h-6 w-6 mb-2" />
            <div className="text-sm font-medium">Create Campaign</div>
          </button>
          <button className="bg-[#1a1a1a] border border-gray-700 text-white p-4 rounded-xl hover:border-gray-600 transition-all duration-200">
            <TrendingUp className="h-6 w-6 mb-2" />
            <div className="text-sm font-medium">View Analytics</div>
          </button>
        </div>
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
        
        <div className="bg-[#111111] p-6 rounded-2xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Lead Sources</h3>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">Organic Search</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">45.2%</div>
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +2.3%
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Social Media</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">28.7%</div>
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +5.1%
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Email Marketing</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">18.9%</div>
                <div className="text-xs text-red-600 flex items-center">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  -1.2%
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Paid Ads</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">7.2%</div>
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
        <div className="bg-[#111111] rounded-2xl border border-gray-800">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Recent Campaigns</h3>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">View All</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Campaign</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Opens</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">CVR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {recentCampaigns.map((campaign) => (
                  <tr key={campaign.name} className="hover:bg-[#1a1a1a]">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-white">{campaign.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        campaign.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{campaign.opens.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{campaign.conversion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Social Posts */}
        <div className="bg-[#111111] rounded-2xl border border-gray-800">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Recent Social Posts</h3>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">View All</button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <div className="text-white text-xs font-bold">
                          {post.platform.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{post.content}</div>
                      <div className="text-xs text-gray-400">{post.platform} • {post.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Heart className="h-3 w-3" />
                      <span className="text-xs">{post.engagement}</span>
                    </div>
                    <div className={`text-xs ${post.status === 'Published' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {post.status}
                    </div>
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