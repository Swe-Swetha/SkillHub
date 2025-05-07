//  import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Mentor = () => {
//   const navigate = useNavigate();

//   const requests = [
//     {
//       id: 1,
//       name: 'Alice Johnson',
//       skills: ['python'],
//       date: '10/02/2025',
//       timing: '6pm',
//     },
//     {
//       id: 2,
//       name: 'Bob Smith',
//       skills: ['java'],
//       date: '12/03/2025',
//       timing: '10am',
//     },
//     {
//       id: 3,
//       name: 'Charlie Ray',
//       skills: ['python'],
//       date: '20/03/2025',
//       timing: '12pm',
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-8">Mentorship Requests</h1>

//       {/* Table Header */}
//       <div className="w-full max-w-7xl grid grid-cols-5 gap-4 bg-gray-200 font-semibold p-4 rounded-lg shadow-md">
//         <div className='text-center'>User Name</div>
//         <div className='text-center'>Requested Skills</div>
//         <div className='text-center'>Requested Date</div>
//         <div className='text-center'>Requested Timing</div>
//         <div className='text-center'>Actions</div>
//       </div>

//       {/* Request Rows */}
//       {requests.map((req) => (
//         <div
//           key={req.id}
//           className="w-full max-w-7xl grid grid-cols-5 gap-4 items-center border-b border-gray-300 py-4 bg-white text-center"
//         >
//           <div>{req.name}</div>
//           <div>
//             {req.skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="inline-block px-2 py-1 rounded-full"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//           <div>{req.date}</div>
//           <div>{req.timing}</div>
//           <div className="flex gap-2 justify-center">
//             <button
//               className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg"
//               onClick={() => {
//                 navigate('/meetingForm');
//               }}
//             >
//               Accept
//             </button>
//             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg">
//               Cancel
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Mentor;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mentor = () => {
  const navigate = useNavigate();

  const requests = [
    { id: 1, name: 'Alice Johnson', skills: ['python'], date: '10/02/2025', timing: '6pm' },
    { id: 2, name: 'Bob Smith', skills: ['java'], date: '12/03/2025', timing: '10am' },
    { id: 3, name: 'Charlie Ray', skills: ['python'], date: '20/03/2025', timing: '12pm' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('name');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filtering logic
  const filteredRequests = requests.filter((req) => {
    const lowerSearch = searchTerm.toLowerCase();

    if (filterBy === 'name') {
      return req.name.toLowerCase().includes(lowerSearch);
    } else if (filterBy === 'skill') {
      return req.skills.some((skill) => skill.toLowerCase().includes(lowerSearch));
    } else if (filterBy === 'date') {
      return req.date.includes(searchTerm);
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Mentorship Requests</h1>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        
        <input
          type="text"
          placeholder={`Search by ${filterBy}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-64"
        />

<div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Filter By: {filterBy.charAt(0).toUpperCase() + filterBy.slice(1)}
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 bg-white border rounded shadow-md w-40 z-10">
              {['name', 'skill', 'date'].map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setFilterBy(option);
                    setDropdownOpen(false);
                  }}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Table Header */}
      <div className="w-full max-w-7xl grid grid-cols-5 gap-4 bg-gray-200 font-semibold p-4 rounded-lg shadow-md">
        <div className="text-center">User Name</div>
        <div className="text-center">Requested Skills</div>
        <div className="text-center">Requested Date</div>
        <div className="text-center">Requested Timing</div>
        <div className="text-center">Actions</div>
      </div>

      {/* Request Rows */}
      {filteredRequests.map((req) => (
        <div
          key={req.id}
          className="w-full max-w-7xl grid grid-cols-5 gap-4 items-center border-b border-gray-300 py-4 bg-white text-center"
        >
          <div>{req.name}</div>
          <div>
            {req.skills.map((skill, index) => (
              <span key={index} className="inline-block px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
          <div>{req.date}</div>
          <div>{req.timing}</div>
          <div className="flex gap-2 justify-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg"
              onClick={() => navigate('/meetingForm')}
            >
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      ))}

      {filteredRequests.length === 0 && (
        <div className="mt-6 text-gray-500 font-medium">No matching requests found.</div>
      )}
    </div>
  );
};

export default Mentor;
