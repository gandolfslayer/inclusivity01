import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Mail, 
  BarChart3, 
  Share2, 
  Workflow, 
  Settings,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'leads', label: 'Lead Management', icon: Users },
  { id: 'campaigns', label: 'Email Campaigns', icon: Mail },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'social', label: 'Social Media', icon: Share2 },
  { id: 'automation', label: 'Automation', icon: Workflow },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, collapsed, setCollapsed }) => {
  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-xl font-bold text-gray-900">MarketPro</h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className={`h-5 w-5 text-gray-600 transform transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'} ${isActive ? 'text-blue-700' : 'text-gray-500'}`} />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;