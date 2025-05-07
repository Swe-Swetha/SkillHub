import React, { useState, useEffect } from 'react';
import teaching from "../../assets/teaching.avif";
import enrolling from "../../assets/enrolling.avif";
import connect1 from "../../assets/connect1.avif";
import connect2 from "../../assets/connect2.avif";
import connect3 from "../../assets/connect3.avif";
import connect4 from "../../assets/connect4.avif";
import connect5 from "../../assets/connect5.avif";
import connect6 from "../../assets/connect6.avif";

import { useNavigate } from 'react-router-dom';


const ConnectPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

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
    <>
      {/* Banner Images */}

      {/* <div className="flex justify-center items-center gap-4 p-4 mt-6">
        <div className="border border-gray-400 p-4">
          <img src={teaching} width={400} />
          <h2 className='font-bold text-xl text-center mt-2'>Become a Mentor</h2>
          <p>Share your skills and inspire learners worldwide. Create and offer courses on topics you're passionate about, connect with eager students, and grow your teaching journey.</p>
          <button className='bg-gray-600 text-white w-full py-2 mt-4'>Start Teaching</button>
        </div>
        <div className="border border-gray-400 p-4">
          <img src={enrolling} width={400}/>
          <h2 className='font-bold text-xl text-center mt-4'>Learn New Skills</h2>
          <p>Unlock new knowledge and enhance your abilities. Browse and enroll in courses taught by skilled mentors, tailored to help you learn at your pace and achieve your goals.</p>
          <button className='bg-gray-600 text-white w-full py-2 mt-4'>Book Courses</button>
        </div>
      </div> */}

      {/* Banner Images */}
<div className="flex justify-center flex-wrap gap-8 p-4 mt-6 w-full">
  <div className="border border-gray-400 p-4 max-w-lg text-center">
    <img src={teaching} width={400} className="mx-auto" />
    <h2 className='font-bold text-xl mt-4'>Become a Mentor</h2>
    <p className='mt-2 text-gray-700'>
      Share your skills and inspire learners worldwide. Create and offer courses on topics you're passionate about, connect with eager students, and grow your teaching journey.
    </p>
    <button className='bg-gray-600 text-white w-full py-2 mt-4' onClick={()=>{navigate('/mentor')}}>Start Teaching</button>
  </div>
  <div className="border border-gray-400 p-4 max-w-lg text-center">
    <img src={enrolling} width={400} className="mx-auto" />
    <h2 className='font-bold text-xl mt-4'>Learn New Skills</h2>
    <p className='mt-2 text-gray-700'>
      Unlock new knowledge and enhance your abilities. Browse and enroll in courses taught by skilled mentors, tailored to help you learn at your pace and achieve your goals.
    </p>
    <button className='bg-gray-600 text-white w-full py-2 mt-4'>Book Courses</button>
  </div>
</div>


      <div className='flex flex-wrap justify-center mt-2'>
        <img src={connect5} width={250}/>
        <img src={connect2} width={250}/>
        <img src={connect3} width={250}/>
        <img src={connect1} width={250}/>
        <img src={connect6} width={250}/>
        <img src={connect4} width={250}/>
        
      </div>

      <div className="text-center mt-2">A community where skills are shared and friendships are formed.
      Start your journey of learning and collaboration.</div>    

      {/* Search and User Cards */}
      <div className="p-6 max-w-full mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Find Skill Partners</h1>

        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Search by name or skill (e.g., graphic design, JavaScript)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredUsers.map(user => (
            <div
              key={user._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Placeholder Avatar */}
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {user.name[0]}
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No users match your search.</p>
        )}
      </div>
    </>
  );
};

export default ConnectPage;
