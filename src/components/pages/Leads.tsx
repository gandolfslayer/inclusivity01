import React, { useState } from 'react';
import { Plus, Search, Filter, Mail, Phone, Calendar, Star } from 'lucide-react';

const Leads: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const leads = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      email: 'sarah.johnson@techstart.com',
      phone: '+1 (555) 123-4567',
      score: 95,
      stage: 'Qualified',
      source: 'Organic Search',
      value: '$12,500',
      lastContact: '2024-01-15',
      tags: ['Hot Lead', 'Enterprise']
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Innovation Labs',
      email: 'm.chen@innovationlabs.com',
      phone: '+1 (555) 234-5678',
      score: 88,
      stage: 'Proposal',
      source: 'Social Media',
      value: '$8,900',
      lastContact: '2024-01-14',
      tags: ['Medium Priority']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Global Solutions',
      email: 'e.rodriguez@globalsolutions.com',
      phone: '+1 (555) 345-6789',
      score: 82,
      stage: 'Demo Scheduled',
      source: 'Email Marketing',
      value: '$15,200',
      lastContact: '2024-01-13',
      tags: ['Follow Up', 'High Value']
    },
    {
      id: 4,
      name: 'David Kim',
      company: 'StartUp Co.',
      email: 'david@startup.co',
      phone: '+1 (555) 456-7890',
      score: 76,
      stage: 'Contacted',
      source: 'Referral',
      value: '$6,700',
      lastContact: '2024-01-12',
      tags: ['New Lead']
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-700 bg-green-100';
    if (score >= 70) return 'text-yellow-700 bg-yellow-100';
    return 'text-red-700 bg-red-100';
  };

  const getStageColor = (stage: string) => {
    const colors = {
      'Qualified': 'text-green-700 bg-green-100',
      'Proposal': 'text-blue-700 bg-blue-100',
      'Demo Scheduled': 'text-purple-700 bg-purple-100',
      'Contacted': 'text-gray-700 bg-gray-100',
    };
    return colors[stage as keyof typeof colors] || 'text-gray-700 bg-gray-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600 mt-1">Manage and track your sales leads and opportunities</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add New Lead</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads by name, company, or email..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <select 
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Leads</option>
              <option value="qualified">Qualified</option>
              <option value="proposal">Proposal</option>
              <option value="demo">Demo Scheduled</option>
              <option value="contacted">Contacted</option>
            </select>
            <button className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-700">
                            {lead.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                        <div className="text-sm text-gray-500">{lead.company}</div>
                        <div className="text-xs text-gray-400">{lead.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getScoreColor(lead.score)}`}>
                      <Star className="h-3 w-3 mr-1" />
                      {lead.score}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStageColor(lead.stage)}`}>
                      {lead.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{lead.value}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.lastContact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="text-purple-600 hover:text-purple-900">
                        <Calendar className="h-4 w-4" />
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

export default Leads;