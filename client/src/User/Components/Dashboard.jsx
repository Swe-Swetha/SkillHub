import React from 'react'
import Explore from './Dashboard/Explore'
import DashboardHeader from './Dashboard/DashboardHeader'
import { useState } from 'react'
import ConnectPage from './Dashboard/ConnectPage';
import Blogs from './Dashboard/Blogs';
import EarnBadge from './Dashboard/EarnBadge';
import Leaderboard from './Dashboard/Leaderboard';

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Explore");

  const tabComponents = {
    "Explore": <Explore />,
    "Connect": <ConnectPage />,
    "Blogs": <Blogs />,
    "Earn Badge": <EarnBadge />,
    "Leaderboard": <Leaderboard />
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => tabComponents[activeTab] || (
    <div className="text-center mt-10 text-xl text-gray-700">
      Welcome to SkillHub!
    </div>
  )
  return (
    <>
      <div className="h-screen">

        {/* Header */}
        <div className="h-[10%]">
          <DashboardHeader activeTab={activeTab} handleTabClick={handleTabClick} />
        </div>

        {/* Main Content */}
        <div className="h-[90%] pt-[15px]"> {/* Add padding to prevent overlap */}
          {renderContent()}
        </div>
      </div>
    </>
  )
}

export default Dashboard