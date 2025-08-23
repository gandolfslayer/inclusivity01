import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Mail, 
  BarChart3, 
  Share2, 
  Workflow, 
  Settings,
  ChevronLeft,
  Zap
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
    <div className={`${collapsed ? 'w-16' : 'w-64'} bg-[#111111] border-r border-gray-800 flex flex-col transition-all duration-300`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Adaptive Nexus</h1>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className={`h-5 w-5 text-gray-400 transform transition-transform ${collapsed ? 'rotate-180' : ''}`} />
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
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'} ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  {!collapsed && <span className="font-medium text-sm">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {!collapsed && (
        <div className="p-4 border-t border-gray-800">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
            <h3 className="font-semibold text-sm mb-1">Upgrade to Pro</h3>
            <p className="text-xs opacity-90 mb-3">Unlock advanced features and unlimited posts</p>
            <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 text-xs font-medium transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
