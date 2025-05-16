// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import coin from "../assets/LessCoins.png";

// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   const [profile] = useState({
//     firstName: 'Swetha',
//     lastName: 'Jayaprakash',
//     phone: '8754004599',
//     email: 'swetha@gmail.com',
//     bio: 'A passionate web developer and skill swapper.',
//     skillsHave: ['JavaScript', 'React', 'CSS'],
//     skillsWant: ['Python', 'UI/UX Design'],
//     points: 120,
//     profileImage: 'src/User/assets/auth.jpeg',
//   });

//   return (
//     <div className="min-h-screen flex items-center justify-center relative bg-gray-50">
//       <div className="w-full max-w-5xl mx-auto px-6 py-10 relative">
//         <div className={`border border-gray-200 rounded-3xl shadow-xl p-8 bg-white transition duration-300 ${isEditing ? 'blur-sm ' : ''}`}>
//           {/* Profile Header */}
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-8 mb-6">
//               <img
//                 src={profile.profileImage}
//                 alt="Profile"
//                 className="w-32 h-32 rounded-full object-cover border-2 border-black shadow-md"
//               />
//               <div className="text-center md:text-left">
//                 <div className="flex items-center">
//                 <span className="text-3xl font-bold text-red-500 pr-8">{profile.firstName}{profile.lastName}</span>
//                 <span className='text-xl px-1 font-bold text-yellow-500 cursor-pointer'>{profile.points}</span>
//                 <span className='cursor-pointer'><img src={coin} width={30}/></span>
//                 </div>
//                 <p className="text-gray-600 mt-2">{profile.bio}</p>
//               </div>
//             </div>
//             <div className="flex gap-6">
//               {/* Edit Button */}
//               <svg
//                 onClick={() => setIsEditing(true)}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-6 h-6 hover:cursor-pointer"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
//               </svg>

//               {/* Cancel Button */}
//               <svg
//                 onClick={() => navigate('/')}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-6 h-6 hover:cursor-pointer"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//               </svg>
//             </div>
//           </div>

//           {/* Info Section */}
//           <form>
//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             <div>
//               <label>Full Name</label>
//               <div>{profile.firstName}</div>
//             </div>
//             <div>
//               <label>Last Name</label>
//               <div>{profile.lastName}</div>
//             </div>
//             <div>
//               <label>Phone No</label>
//               <div>{profile.phone}</div>
//             </div>
//             <div>
//               <label>Email</label>
//               <div>{profile.email}</div>
//             </div>
//             <div>
//               <label>Bio</label>
//               <div>{profile.bio}</div>
//             </div>
//           </div>
//           </form>

//           {/* Skills Section */}
//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             <div>
//               <h3 className="font-semibold mb-3">Skills I Have</h3>
//               <div className="flex flex-wrap gap-2">
//                 {profile.skillsHave.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className="border border-red-500 text-red-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-red-200 transition"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-3">Skills I Want to Learn</h3>
//               <div className="flex flex-wrap gap-2">
//                 {profile.skillsWant.map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className="border border-red-500 text-red-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-red-200 transition"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Edit Profile Overlay */}
//         {isEditing && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-3xl bg-black/30 backdrop-blur-sm z-50">
//             <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl w-full">
//               <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
//               <form className="space-y-4">
//               <div className="grid md:grid-cols-2 gap-4 ">
//             <div>
//               <div>Full Name</div>
//               <input placeholder='Full name' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
//             </div>
//             <div>
//               <div>Last Name</div>
//               <input placeholder='Last name' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
//             </div>
//             <div>
//               <div>Phone No</div>
//               <input placeholder='Phone No' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
//             </div>
//             <div>
//               <div>Email</div>
//               <input placeholder='Email' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
//             </div>
//             <div>
//               <div>Skill I Have</div>
//               <input placeholder='Skill I Have' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
//             </div>
//             <div>
//               <div>Skill I Want</div>
//               <input placeholder='Skill I Want' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
//             </div>
           
//           </div>
//                 <textarea placeholder="Bio" className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-green-500" rows={2}></textarea>
//               </form>


//               <div className="flex justify-end mt-4 gap-4">
//                 <button
//                   onClick={() => setIsEditing(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-red-600 text-white rounded-xl p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="profile"
            className="rounded-full w-16 h-16"
          />
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <div className="flex gap-2 text-sm mt-1">
              <span className="bg-white text-black px-2 py-0.5 rounded">425 Skillbucks</span>
              <span className="bg-white text-violet-600 px-2 py-0.5 rounded">Advanced</span>
            </div>
          </div>
        </div>
        <button className="bg-white text-violet-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition">
          Edit Profile
        </button>
      </div>

      {/* About & Contact */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="mb-4">
          <h3 className="font-semibold text-lg">About</h3>
          <p className="text-gray-700 mt-1">Frontend developer with 5 years of experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Skills I Have</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">UI Design</span>
            </div>

            <h3 className="font-semibold mt-4">Skills I Want</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-800">TypeScript</span>
              <span className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-800">Machine Learning</span>
            </div>
          </div>
           <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="text-gray-700">Email: john@example.com</p>
            <p className="text-gray-700">Phone: +1 (234) 567-8901</p>
          </div>
        </div>
      </div>

      {/* Badges & Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Earned Badges */}
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Earned Badges</h3>
            <button className="text-violet-600 text-sm">Earn More</button>
          </div>
          <div className="flex gap-4">
            <div className="bg-gray-100 p-4 rounded text-center w-full">
              <div className="text-2xl">🏅</div>
              <div className="text-sm mt-2">JavaScript Pro</div>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center w-full">
              <div className="text-2xl">🏅</div>
              <div className="text-sm mt-2">React Master</div>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center w-full">
              <div className="text-2xl">🏅</div>
              <div className="text-sm mt-2">Web Design</div>
            </div>
          </div>
        </div>

        {/* Connections */}
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Connections</h3>
            <button className="text-violet-600 text-sm">Find More</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40?img=3" className="rounded-full w-10 h-10" />
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-gray-500">Python, Data Science</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40?img=5" className="rounded-full w-10 h-10" />
              <div>
                <div className="font-medium">Alex Johnson</div>
                <div className="text-sm text-gray-500">UX Design, Figma</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40?img=7" className="rounded-full w-10 h-10" />
              <div>
                <div className="font-medium">Sarah Williams</div>
                <div className="text-sm text-gray-500">Flutter, Dart</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Enrolled Courses</h3>
          <button className="text-violet-600 text-sm">Explore More</button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-md">
            <h4 className="font-semibold">React Fundamentals</h4>
            <p className="text-sm text-gray-600">John Doe</p>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full mt-1 inline-block">Beginner</span>
          </div>
          <div className="border p-4 rounded-md">
            <h4 className="font-semibold">UI/UX Design Principles</h4>
            <p className="text-sm text-gray-600">Jane Smith</p>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full mt-1 inline-block">Intermediate</span>
          </div>
          <div className="border p-4 rounded-md">
            <h4 className="font-semibold">Data Science Essentials</h4>
            <p className="text-sm text-gray-600">Alex Johnson</p>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full mt-1 inline-block">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
