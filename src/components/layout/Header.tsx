import React from 'react';
import { Bell, Search, Menu, User } from 'lucide-react';

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns, leads, analytics..."
              className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
              <div className="text-xs text-gray-500">Marketing Manager</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;