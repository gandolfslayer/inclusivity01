import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange' | 'purple' | 'pink';
}

const colorClasses = {
  blue: 'bg-gradient-to-r from-blue-500 to-blue-600',
  green: 'bg-gradient-to-r from-green-500 to-green-600',
  orange: 'bg-gradient-to-r from-orange-500 to-orange-600',
  purple: 'bg-gradient-to-r from-purple-500 to-purple-600',
  pink: 'bg-gradient-to-r from-pink-500 to-pink-600'
};

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, trend, icon: Icon, color }) => {
  return (
    <div className="bg-[#111111] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-white mb-2">{value}</p>
          <div className="flex items-center">
            {trend === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </span>
            <span className="text-sm text-gray-400 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${colorClasses[color]} text-white shadow-lg`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;