import React from 'react';

interface ChartData {
  name: string;
  emails: number;
  clicks: number;
  conversions: number;
}

interface ChartContainerProps {
  title: string;
  subtitle: string;
  data: ChartData[];
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, subtitle, data }) => {
  const maxValue = Math.max(...data.map(d => d.emails));
  
  return (
    <div className="bg-[#111111] p-6 rounded-2xl border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-400">Emails Sent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-gray-400">Clicks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-400">Conversions</span>
          </div>
        </div>
      </div>
      
      <div className="h-64 flex items-end justify-between space-x-4">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex items-end justify-center space-x-1">
            <div className="relative flex items-end space-x-1">
              <div 
                className="w-6 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t transition-all duration-500"
                style={{ height: `${(item.emails / maxValue) * 200}px` }}
                title={`Emails: ${item.emails}`}
              ></div>
              <div 
                className="w-6 bg-gradient-to-t from-pink-500 to-pink-400 rounded-t transition-all duration-500"
                style={{ height: `${(item.clicks / maxValue) * 200}px` }}
                title={`Clicks: ${item.clicks}`}
              ></div>
              <div 
                className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-500"
                style={{ height: `${(item.conversions / maxValue) * 200}px` }}
                title={`Conversions: ${item.conversions}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        {data.map((item, index) => (
          <div key={index} className="text-center flex-1">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartContainer;