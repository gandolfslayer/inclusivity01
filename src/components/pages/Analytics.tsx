import React from 'react';
import { TrendingUp, TrendingDown, Users, Mail, Target, DollarSign } from 'lucide-react';

const Analytics: React.FC = () => {
  const kpis = [
    {
      title: 'Total Website Visitors',
      value: '124,573',
      change: '+12.3%',
      trend: 'up' as const,
      period: 'vs last month'
    },
    {
      title: 'Lead Conversion Rate',
      value: '8.4%',
      change: '+2.1%',
      trend: 'up' as const,
      period: 'vs last month'
    },
    {
      title: 'Email Open Rate',
      value: '24.8%',
      change: '-1.2%',
      trend: 'down' as const,
      period: 'vs last month'
    },
    {
      title: 'Customer Acquisition Cost',
      value: '$47.50',
      change: '-8.7%',
      trend: 'up' as const,
      period: 'vs last month'
    }
  ];

  const channelPerformance = [
    { channel: 'Organic Search', visitors: 45672, leads: 1823, conversion: 4.0, cost: '$0' },
    { channel: 'Social Media', visitors: 28901, leads: 1156, conversion: 4.0, cost: '$2,340' },
    { channel: 'Email Marketing', visitors: 18234, leads: 912, conversion: 5.0, cost: '$450' },
    { channel: 'Paid Ads', visitors: 15678, leads: 627, conversion: 4.0, cost: '$4,890' },
    { channel: 'Direct', visitors: 12089, leads: 484, conversion: 4.0, cost: '$0' },
    { channel: 'Referral', visitors: 8901, legs: 356, conversion: 4.0, cost: '$0' }
  ];

  const campaignData = [
    { name: 'Summer Sale', impressions: 125000, clicks: 3750, ctr: 3.0, conversions: 187, cpr: 5.0 },
    { name: 'Product Launch', impressions: 89000, clicks: 2670, ctr: 3.0, conversions: 134, cpr: 5.0 },
    { name: 'Newsletter', impressions: 67000, clicks: 2010, ctr: 3.0, conversions: 101, cpr: 5.0 },
    { name: 'Retargeting', impressions: 45000, clicks: 1350, ctr: 3.0, conversions: 81, cpr: 6.0 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Marketing Analytics</h1>
        <p className="text-gray-600 mt-1">Track performance, measure ROI, and optimize your marketing strategies</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{kpi.value}</p>
                <div className="flex items-center">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">{kpi.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Channel Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Channel Performance</h3>
          <p className="text-sm text-gray-500 mt-1">Compare performance across different marketing channels</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visitors</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leads</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {channelPerformance.map((channel, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{channel.channel}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {channel.visitors.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {channel.leads.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {channel.conversion}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {channel.cost}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-green-600 font-medium">
                      {index < 3 ? '+' : ''}
                      {(Math.random() * 200 + 50).toFixed(0)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaign Performance and Funnel Analysis */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Campaign Performance</h3>
            <p className="text-sm text-gray-500 mt-1">Top performing campaigns this month</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {campaignData.map((campaign, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                    <span className="text-sm text-gray-500">{campaign.conversions} conversions</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Impressions</div>
                      <div className="font-medium">{campaign.impressions.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Clicks</div>
                      <div className="font-medium">{campaign.clicks.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">CTR</div>
                      <div className="font-medium">{campaign.ctr}%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">CVR</div>
                      <div className="font-medium">{campaign.cpr}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Conversion Funnel</h3>
            <p className="text-sm text-gray-500 mt-1">Track user journey from visitor to customer</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Website Visitors</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">124,573</div>
                    <div className="text-sm text-gray-500">100%</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-gray-900">Leads Generated</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">10,464</div>
                    <div className="text-sm text-gray-500">8.4%</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-gray-900">Qualified Leads</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">3,139</div>
                    <div className="text-sm text-gray-500">30%</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-orange-600" />
                    <span className="font-medium text-gray-900">Customers</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">628</div>
                    <div className="text-sm text-gray-500">20%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;