import React, { useState, useEffect } from 'react';

const ConnectPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Sample users loaded once on component mount
  useEffect(() => {
    const sampleUsers = [
      { _id: '1', name: 'Alice Johnson', skills: ['JavaScript', 'React'] },
      { _id: '2', name: 'Bob Smith', skills: ['UI/UX', 'Figma'] },
      { _id: '3', name: 'Charlie Ray', skills: ['Python', 'Data Science'] },
      { _id: '4', name: 'Swetha', skills: ['Python', 'Data Science'] },
    ];
    setUsers(sampleUsers);
    setFilteredUsers(sampleUsers);
  }, []);

  // Filter users whenever search term changes
  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const results = users.filter(user =>
      user.name.toLowerCase().includes(lowerSearch) ||
      user.skills.some(skill => skill.toLowerCase().includes(lowerSearch))
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find Skill Partners</h1>

      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded mb-6"
        placeholder="Search by name or skill (e.g., graphic design, JavaScript)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <div key={user._id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600 mb-2">Skills: {user.skills.join(', ')}</p>
            <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Connect
            </button>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No users match your search.</p>
      )}
    </div>
  );
};

export default ConnectPage;
