import React from 'react';
// 
const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    profilePic: 'https://i.pravatar.cc/150?img=3',
    courses: ['React Basics', 'Advanced JavaScript', 'UI/UX Fundamentals'],
  },
  {
    id: 2,
    name: 'Mark Thompson',
    profilePic: 'https://i.pravatar.cc/150?img=12',
    courses: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 3,
    name: 'Priya Sharma',
    profilePic: 'https://i.pravatar.cc/150?img=25',
    courses: ['Python for Beginners', 'Django', 'Data Structures'],
  },
];

const Courses = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mt-2 mb-8">
        <div className="flex gap-2">
       <img  alt='logo' className='border border-black'/>
      <h1 className="text-3xl font-bold ">Courses</h1></div>
      <input className='w-full max-w-lg p-2 border border-gray-400 rounded-lg' placeholder='search by profile'/>
      <button><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg></button>
      </div>
    
      <div className="grid grid-cols-[1fr_2fr_1fr] text-center bg-gray-100 p-4 font-semibold text-lg rounded-t-lg border-b border-gray-300">
        <div>User</div>
        <div>Courses</div>
        <div>Action</div>
      </div>

      {users.map((user) => (
        <div
          key={user.id}
          className="grid grid-cols-[1fr_2fr_1fr] items-center justify-items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition"
        >
          {/* Column 1 - Profile Pic & Name */}
          <div className="flex items-center gap-4">
            <img
              src={user.profilePic}
              alt={user.name}
              className="w-12 h-12 rounded-full border"
            />
            <span className="font-medium">{user.name}</span>
          </div>

          {/* Column 2 - Courses */}
          <div className="flex flex-wrap gap-2 text-sm text-gray-700">
            {user.courses.map((course, index) => (
              <span
                key={index}
                className="border border-red-500 text-red-500  px-3 py-1 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>

          {/* Column 3 - View Profile Button */}
          <div className="text-right">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
