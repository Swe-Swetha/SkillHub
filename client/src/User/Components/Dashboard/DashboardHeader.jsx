import React, { useState, useEffect } from 'react';
import Skillbucks from './Skillbucks';

const DashboardHeader = ({ activeTab, handleTabClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSkillBuckOpen, setIsSkillBuckOpen] = useState(false);

  const tabs = ["Explore", "Connect", "Blogs", "Earn Badge", "Leaderboard"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* HEADER */}
      <div
        className={`transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } fixed top-0 left-0 w-full bg-white shadow-md z-50`}
      >
        <div className="flex justify-between p-6">
          <div className="text-xl font-bold">SkillHub</div>

          <ul className="flex gap-4">
            {tabs.map((tab, id) => (
              <li
                key={id}
                className={`hover:cursor-pointer rounded-full px-4 py-2 transition ${activeTab === tab ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
                  }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div
              // className="px-1 py-2 border border-orange-400 text-white bg-orange-400 rounded-full hover:cursor-pointer hover:bg-white hover:text-orange-400 hover:shadow-lg"
              className="w-10 h-10 text-xl flex items-center justify-center rounded-full bg-orange-400 text-white font-bold border border-orange-400 hover:bg-white hover:text-orange-400 hover:shadow-lg cursor-pointer transition-all"
              onClick={() => setIsSkillBuckOpen(true)}
            >
              $
            </div>
            <div className="hover:cursor-pointer">Profile</div>
          </div>
        </div>
      </div>

      {/* SKILLBUCK MODAL OVERLAY */}
      {isSkillBuckOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <Skillbucks isOpen={setIsSkillBuckOpen} />
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
