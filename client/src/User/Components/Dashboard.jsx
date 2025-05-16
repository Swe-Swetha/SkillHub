import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Explore from './Dashboard/Explore';
import DashboardHeader from './Dashboard/DashboardHeader';
import ConnectPage from './Dashboard/ConnectPage';
import Blogs from './Dashboard/Blogs';
import EarnBadge from './Dashboard/EarnBadge';
import Leaderboard from './Dashboard/Leaderboard';

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'Explore';
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setSearchParams({ tab: tabName }); // sync URL
  };

  const tabComponents = {
    "Explore": <Explore />,
    "Connect": <ConnectPage />,
    "Blogs": <Blogs />,
    "Earn Badge": <EarnBadge />,
    "Leaderboard": <Leaderboard />
  };

  const renderContent = () => tabComponents[activeTab] || (
    <div className="text-center mt-10 text-xl text-gray-700">
      Welcome to SkillHub!
    </div>
  );

  return (
    <div className="h-screen">
      <div className="h-[10%]">
        <DashboardHeader activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>

      <div className="h-[90%] pt-[15px]">
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
