import React from 'react';
import { Bell, Search, Menu, User, Plus } from 'lucide-react';

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <header className="bg-[#111111] border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800"
          >
            <Menu className="h-5 w-5 text-gray-400" />
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2.5 w-96 bg-[#1a1a1a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Post</span>
          </button>
          
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-medium text-white">Sarah Johnson</div>
              <div className="text-xs text-gray-400">Marketing Manager</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;