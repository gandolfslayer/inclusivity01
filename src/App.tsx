import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/pages/Dashboard';
import Leads from './components/pages/Leads';
import Campaigns from './components/pages/Campaigns';
import Analytics from './components/pages/Analytics';
import SocialMedia from './components/pages/SocialMedia';
import Automation from './components/pages/Automation';
import Settings from './components/pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'leads':
        return <Leads />;
      case 'campaigns':
        return <Campaigns />;
      case 'analytics':
        return <Analytics />;
      case 'social':
        return <SocialMedia />;
      case 'automation':
        return <Automation />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      <Sidebar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto p-6 bg-[#0a0a0a]">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;