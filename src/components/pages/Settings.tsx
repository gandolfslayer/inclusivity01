import React, { useState } from 'react';
import { User, Bell, Shield, Palette, Database, Plug, Globe, CreditCard, Users, Key } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'data', label: 'Data & Privacy', icon: Database },
    { id: 'integrations', label: 'Integrations', icon: Plug },
    { id: 'localization', label: 'Localization', icon: Globe },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'api', label: 'API Keys', icon: Key }
  ];

  const integrations = [
    { name: 'Salesforce', status: 'Connected', description: 'Sync leads and contacts', logo: '☁️' },
    { name: 'HubSpot', status: 'Available', description: 'Import marketing data', logo: '🟠' },
    { name: 'Mailchimp', status: 'Connected', description: 'Email campaign sync', logo: '🐵' },
    { name: 'Google Analytics', status: 'Connected', description: 'Website tracking', logo: '📊' },
    { name: 'Stripe', status: 'Available', description: 'Payment processing', logo: '💳' },
    { name: 'Slack', status: 'Connected', description: 'Team notifications', logo: '💬' }
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', email: 'sarah@company.com', role: 'Admin', status: 'Active' },
    { name: 'Michael Chen', email: 'michael@company.com', role: 'Editor', status: 'Active' },
    { name: 'Emily Rodriguez', email: 'emily@company.com', role: 'Viewer', status: 'Pending' },
    { name: 'David Kim', email: 'david@company.com', role: 'Editor', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account, preferences, and integrations</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Navigation */}
        <div className="lg:w-64">
          <nav className="space-y-1">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`h-5 w-5 mr-3 ${activeTab === tab.id ? 'text-blue-700' : 'text-gray-400'}`} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Settings</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-10 w-10 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Change Avatar
                      </button>
                      <p className="text-sm text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="Sarah"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Johnson"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="sarah.johnson@company.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      rows={3}
                      defaultValue="Marketing Manager with 5+ years of experience in digital marketing and automation."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Email Notifications</h4>
                    <div className="space-y-3">
                      {['New leads', 'Campaign updates', 'Weekly reports', 'Security alerts'].map((item) => (
                        <label key={item} className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                          <span className="ml-3 text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Push Notifications</h4>
                    <div className="space-y-3">
                      {['Campaign performance alerts', 'Lead scoring updates', 'Team mentions'].map((item) => (
                        <label key={item} className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                          <span className="ml-3 text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Integrations */}
            {activeTab === 'integrations' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Integrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {integrations.map((integration) => (
                    <div key={integration.name} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{integration.logo}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{integration.name}</h4>
                            <p className="text-sm text-gray-500">{integration.description}</p>
                          </div>
                        </div>
                        <div>
                          {integration.status === 'Connected' ? (
                            <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                              Disconnect
                            </button>
                          ) : (
                            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                              Connect
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          integration.status === 'Connected'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {integration.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Management */}
            {activeTab === 'team' && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Invite Member
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {teamMembers.map((member, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8">
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-sm font-medium text-blue-700">
                                    {member.name.charAt(0)}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                <div className="text-sm text-gray-500">{member.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              member.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {member.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Remove</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Default content for other tabs */}
            {!['profile', 'notifications', 'integrations', 'team'].includes(activeTab) && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {settingsTabs.find(tab => tab.id === activeTab)?.label} Settings
                </h3>
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    {React.createElement(settingsTabs.find(tab => tab.id === activeTab)?.icon || User, { className: "h-12 w-12 mx-auto" })}
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h4>
                  <p className="text-gray-500">
                    {settingsTabs.find(tab => tab.id === activeTab)?.label} settings will be available in a future update.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;