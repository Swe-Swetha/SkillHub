import React, { useState } from 'react';

const Leaderboard = () => {
  const [view, setView] = useState('skillbucks');

  const sampleUsers = [
    { id: 1, name: 'Alice Johnson', skillbucks: 1500, badges: 5 },
    { id: 2, name: 'Bob Smith', skillbucks: 1200, badges: 7 },
    { id: 3, name: 'Charlie Ray', skillbucks: 1800, badges: 3 },
    { id: 4, name: 'Dana Lopez', skillbucks: 1000, badges: 9 },
  ];

  // Sort based on selected view
  const sortedUsers =
    view === 'skillbucks'
      ? [...sampleUsers].sort((a, b) => b.skillbucks - a.skillbucks)
      : [...sampleUsers].sort((a, b) => b.badges - a.badges);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView('skillbucks')}
          className={`px-4 py-2 rounded ${view === 'skillbucks' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
        >
          Skillbucks
        </button>
        <button
          onClick={() => setView('badges')}
          className={`px-4 py-2 rounded ${view === 'badges' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
        >
          Badges Earned
        </button>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white shadow rounded">
        <div className="grid grid-cols-3 font-semibold p-4 border-b">
          <div>Rank</div>
          <div>Name</div>
          <div>{view === 'skillbucks' ? 'Skillbucks' : 'Badges'}</div>
        </div>
        {sortedUsers.map((user, index) => (
          <div
            key={user.id}
            className="grid grid-cols-3 items-center px-4 py-3 border-b hover:bg-gray-50"
          >
            <div>#{index + 1}</div>
            <div>{user.name}</div>
            <div>
              {view === 'skillbucks' ? `${user.skillbucks} 🪙` : `${user.badges} 🏅`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
