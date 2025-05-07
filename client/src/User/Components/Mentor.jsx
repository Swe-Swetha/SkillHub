import React from 'react';
import { useNavigate } from 'react-router-dom';


const Mentor = () => {
  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      name: 'Alice Johnson',
      skills: ['python'],
      date: '10/02/2025',
      timing: '6pm',
    },
    {
      id: 2,
      name: 'Bob Smith',
      skills: ['java'],
      date :'12/03/2025',
      timing: '10am',
    },
    {
      id: 3,
      name: 'Charlie Ray',
      skills:['python'],
      date:'20/03/2025',
      timing: '12pm',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Mentorship Requests</h1>

      <div className="grid grid-cols-5 gap-4 bg-gray-100 font-semibold p-3 rounded-lg">
        <div>User Name</div>
        <div>Requested Skills</div>
        <div>Requested Date</div>
        <div>Requested Timing</div>
        <div>Actions</div>
      </div>

      {requests.map((req) => (
        <div
          key={req.id}
          className="grid grid-cols-5 gap-4 items-center border-b border-gray-200 py-4"
        >
          <div>{req.name}</div>
          <div>
            {req.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 rounded-full mr-2 mb-1"
              >
                {skill}
              </span>
            ))}
          </div>
          <div>{req.date}</div>
          <div>{req.timing}</div>
          <div className="flex gap-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg" onClick={()=>{navigate('/meetingForm')}}>
              Accept
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mentor;
