
import React, { useState } from 'react';
import first from "../../assets/first.png";
import second from "../../assets/second1.png";
import third from "../../assets/third.png";

const Leaderboard = () => {
  const [view, setView] = useState('skillbucks');
  const [searchQuery, setSearchQuery] = useState('');

  const sampleUsers = [
    {
      id: 1,
      name: 'Swetha',
      skillbucks: 1500,
      badges: 5,
      profile: 'https://i.pravatar.cc/150?img=1',
      role: 'Frontend Developer',
    },
    {
      id: 2,
      name: 'Kavitha',
      skillbucks: 1200,
      badges: 7,
      profile: 'https://i.pravatar.cc/150?img=2',
      role: 'Backend Specialist',
    },
    {
      id: 3,
      name: 'Dharshan',
      skillbucks: 1800,
      badges: 3,
      profile: 'https://i.pravatar.cc/150?img=3',
      role: 'UI/UX Designer',
    },
    {
      id: 4,
      name: 'Pavithra',
      skillbucks: 1000,
      badges: 9,
      profile: 'https://i.pravatar.cc/150?img=4',
      role: 'Full Stack Developer',
    },
    {
      id: 5,
      name : "Prakash",
      skillbucks : 1000,
      badges : 8,
      profile : "src/User/assets/user1.jpg",
      role: 'Networking expert',
    },
  ];

  const sortedUsers =
    view === 'skillbucks'
      ? [...sampleUsers].sort((a, b) => b.skillbucks - a.skillbucks)
      : [...sampleUsers].sort((a, b) => b.badges - a.badges);

  const topThree = sortedUsers.slice(0, 3); // Always show real top 3

  const filteredUsers = sortedUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <input
          placeholder="Search by name"
          className="p-2 rounded-md w-full max-w-lg border border-gray-400 focus:border-none focus:outline-none focus:ring-1 focus:ring-[#161179]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-4">
          <button
            onClick={() => setView('skillbucks')}
            className={`px-4 py-2 rounded-full ${
              view === 'skillbucks' ? 'bg-[#161179] text-white' : 'bg-gray-200'
            }`}
          >
            Skillbucks
          </button>
          <button
            onClick={() => setView('badges')}
            className={`px-4 py-2 rounded-full ${
              view === 'badges' ? 'bg-[#161179] text-white' : 'bg-gray-200'
            }`}
          >
            Badges Earned
          </button>
        </div>
      </div>

      {/* Top 3 Cards (unfiltered) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {topThree.map((user, index) => (
          <div
            key={user.id}
            className="bg-white p-6 shadow-lg rounded-xl text-center border cursor-pointer relative border-l-8 border-l-[#161179]"
          >
            <div className="absolute top-2 right-2">
              {index === 0 && <img src={first} width={40} />}
              {index === 1 && <img src={second} width={40} />}
              {index === 2 && <img src={third} width={40} />}
            </div>
            <img
              src={user.profile}
              alt={user.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-[#161179]"
            />
            <div className="text-xl font-bold">{user.name}</div>
            <div className="text-sm text-gray-500">{user.role}</div>
            <div className="mt-3 text-lg font-semibold text-green-600">
              {view === 'skillbucks'
                ? `${user.skillbucks} 🪙`
                : `${user.badges} 🏅`}
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Table (filtered) */}
      <div className="bg-white border-t-4 border-t-[#161179] shadow-lg rounded-lg">
        <div className="grid grid-cols-3 text-center font-semibold p-4 border-b">
          <div>Rank</div>
          <div>Name</div>
          <div>{view === 'skillbucks' ? 'Skillbucks' : 'Badges'}</div>
        </div>
        {filteredUsers.map((user, index) => (
          <div
            key={user.id}
            className="grid grid-cols-3 text-center items-center px-4 py-3 border-b hover:bg-gray-50"
          >
            <div>#{index + 1}</div>
            <div>{user.name}</div>
            <div>
              {view === 'skillbucks'
                ? `${user.skillbucks} 🪙`
                : `${user.badges} 🏅`}
            </div>
          </div>
        ))}
        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-500 p-4">No results found.</div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
