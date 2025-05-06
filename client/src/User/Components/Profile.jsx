// import React from 'react';

// const user = {
//   name: 'Priya Sharma',
//   location: 'Bangalore, India',
//   bio: 'Full Stack Developer passionate about sharing tech knowledge and learning UI/UX design.',
//   skillbucks: 3,
//   skillsOffered: ['React', 'Node.js', 'MongoDB'],
//   skillsToLearn: ['Figma', 'Next.js', 'TypeScript'],
//   badges: [
//     { name: 'Top Mentor', icon: '/src/User/assets/badges/mentor.png' },
//     { name: 'UI Explorer', icon: '/src/User/assets/badges/ui.png' },
//   ],
//   profileImage: '/src/User/assets/ProfilePic.png'
// };

// const Profile = () => {
//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
//       {/* Header Section */}
//       <div className="flex items-center space-x-6">
//         <img
//           src={user.profileImage}
//           alt={user.name}
//           className="w-24 h-24 rounded-full object-cover border-2 border-primary"
//         />
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
//           <p className="text-gray-500">{user.location}</p>
//           <p className="mt-2 text-sm text-gray-600">{user.bio}</p>
//         </div>
//       </div>

//       {/* Skillbucks + Badges */}
//       <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-xl font-semibold text-secondary mb-4 md:mb-0">
//           Skillbucks: <span className="text-primary">{user.skillbucks}</span>
//         </div>
//         <div className="flex space-x-4">
//           {user.badges.map((badge, idx) => (
//             <div key={idx} className="flex flex-col items-center">
//               <img src={badge.icon} alt={badge.name} className="h-10" />
//               <span className="text-xs mt-1 text-gray-600">{badge.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <h3 className="text-lg font-bold text-gray-700 mb-2">Skills You Offer</h3>
//           <ul className="list-disc pl-5 text-gray-600">
//             {user.skillsOffered.map((skill, idx) => (
//               <li key={idx}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-lg font-bold text-gray-700 mb-2">Skills You Want to Learn</h3>
//           <ul className="list-disc pl-5 text-gray-600">
//             {user.skillsToLearn.map((skill, idx) => (
//               <li key={idx}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from 'react';

const user = {
  name: 'Priya Sharma',
  location: 'Bangalore, India',
  bio: 'Full Stack Developer passionate about sharing tech knowledge and learning UI/UX design.',
  skillbucks: 3,
  skillsOffered: ['React', 'Node.js', 'MongoDB'],
  skillsToLearn: ['Figma', 'Next.js', 'TypeScript'],
  profileImage: '/src/User/assets/ProfilePic.png'
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">
      {/* Header Section */}
      <div className="flex items-center space-x-6">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-lg text-gray-500 mt-2">{user.location}</p>
          <p className="mt-4 text-sm text-gray-600">{user.bio}</p>
        </div>
      </div>

      {/* Skillbucks Section */}
      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-semibold text-secondary mb-4 md:mb-0">
          Skillbucks: <span className="text-primary">{user.skillbucks}</span>
        </div>
        <div>
          {isEditing ? (
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-all duration-200">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-all duration-200"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Skills You Offer</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {user.skillsOffered.map((skill, idx) => (
              <li key={idx} className="text-sm">{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Skills You Want to Learn</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {user.skillsToLearn.map((skill, idx) => (
              <li key={idx} className="text-sm">{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-center">
        <button>edit</button>
        <button>save</button>
      </div>
    </div>
  );
};

export default Profile;
