import React, { useState } from 'react';
import { Plus, Play, Pause, Edit, Trash2, Users, Mail, Timer, Zap, ArrowRight } from 'lucide-react';

const Automation: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<number | null>(null);

  const workflows = [
    {
      id: 1,
      name: 'Welcome Email Series',
      status: 'Active',
      trigger: 'New subscriber',
      leads: 1247,
      conversion: '23.4%',
      lastRun: '2024-01-15',
      steps: 4
    },
    {
      id: 2,
      name: 'Abandoned Cart Recovery',
      status: 'Active',
      trigger: 'Cart abandonment',
      leads: 892,
      conversion: '18.9%',
      lastRun: '2024-01-15',
      steps: 3
    },
    {
      id: 3,
      name: 'Lead Nurturing Sequence',
      status: 'Paused',
      trigger: 'Lead score > 70',
      leads: 456,
      conversion: '31.2%',
      lastRun: '2024-01-12',
      steps: 6
    },
    {
      id: 4,
      name: 'Post-Purchase Follow-up',
      status: 'Active',
      trigger: 'Purchase completed',
      leads: 672,
      conversion: '12.8%',
      lastRun: '2024-01-15',
      steps: 5
    }
  ];

  const workflowTemplates = [
    {
      name: 'Email Drip Campaign',
      description: 'Nurture leads with timed email sequences',
      category: 'Email Marketing',
      complexity: 'Easy'
    },
    {
      name: 'Lead Scoring Automation',
      description: 'Automatically score and segment leads',
      category: 'Lead Management',
      complexity: 'Medium'
    },
    {
      name: 'Social Media Scheduler',
      description: 'Schedule and post to multiple platforms',
      category: 'Social Media',
      complexity: 'Easy'
    },
    {
      name: 'Customer Journey Mapping',
      description: 'Track and optimize customer touchpoints',
      category: 'Analytics',
      complexity: 'Advanced'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'text-green-700 bg-green-100',
      'Paused': 'text-yellow-700 bg-yellow-100',
      'Draft': 'text-gray-700 bg-gray-100'
    };
    return colors[status as keyof typeof colors] || 'text-gray-700 bg-gray-100';
  };

  const getComplexityColor = (complexity: string) => {
    const colors = {
      'Easy': 'text-green-700 bg-green-100',
      'Medium': 'text-yellow-700 bg-yellow-100',
      'Advanced': 'text-red-700 bg-red-100'
    };
    return colors[complexity as keyof typeof colors] || 'text-gray-700 bg-gray-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Marketing Automation</h1>
          <p className="text-gray-600 mt-1">Create and manage automated workflows to nurture leads and customers</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Templates
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Workflow</span>
          </button>
        </div>
      </div>

      {/* Automation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Workflows</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Leads in Workflows</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3,267</p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Conversion</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">21.5%</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-100">
              <ArrowRight className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Time Saved</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">147h</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-100">
              <Timer className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Workflows */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Active Workflows</h3>
          <p className="text-sm text-gray-500 mt-1">Manage your automated marketing sequences</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workflow</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trigger</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leads</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {workflows.map((workflow) => (
                <tr key={workflow.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{workflow.name}</div>
                      <div className="text-sm text-gray-500">{workflow.steps} steps</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(workflow.status)}`}>
                      {workflow.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{workflow.trigger}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{workflow.leads.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{workflow.conversion}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workflow.lastRun}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      {workflow.status === 'Active' ? (
                        <button className="text-orange-600 hover:text-orange-900">
                          <Pause className="h-4 w-4" />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900">
                          <Play className="h-4 w-4" />
                        </button>
                      )}
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Workflow Builder */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Workflow Builder</h3>
          <p className="text-sm text-gray-500 mt-1">Drag and drop to create custom automation workflows</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Workflow Canvas */}
            <div className="lg:col-span-2">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Zap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Start Building Your Workflow</h4>
                <p className="text-gray-500 mb-4">Drag components from the sidebar to create your automated sequence</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Start from Template
                </button>
              </div>
            </div>
            
            {/* Components Sidebar */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Triggers</h4>
                <div className="space-y-2">
                  <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">New Lead</span>
                    </div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Email Opened</span>
                    </div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <Timer className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium">Time Delay</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Actions</h4>
                <div className="space-y-2">
                  <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Send Email</span>
                    </div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Update Contact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Library */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Template Library</h3>
          <p className="text-sm text-gray-500 mt-1">Start with pre-built workflows for common use cases</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflowTemplates.map((template, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-200 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getComplexityColor(template.complexity)}`}>
                    {template.complexity}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{template.category}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;