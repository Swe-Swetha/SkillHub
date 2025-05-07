// import React, { useState } from 'react';

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     bio: 'A passionate web developer and skill swapper.',
//     skillsHave: ['JavaScript', 'React', 'CSS'],
//     skillsWant: ['Python', 'UI/UX Design'],
//     points: 120,
//     profileImage: 'https://via.placeholder.com/150',
//   });

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">My Profile</h1>

//       <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-black">
//         {/* Top section: Profile image + name */}
//         <div className="flex items-center gap-6 mb-6">
//           <img
//             src={profile.profileImage}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover border border-gray-300"
//           />
//           <div>
//             <h2 className="text-2xl font-semibold">{profile.name}</h2>
//             <p className="text-gray-600">{profile.bio}</p>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Skills I Have</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               {profile.skillsHave.map((skill, idx) => (
//                 <li key={idx}>{skill}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Skills I Want to Learn</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               {profile.skillsWant.map((skill, idx) => (
//                 <li key={idx}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Points Display */}
//         <div className="text-right">
//           <span className="text-sm text-gray-600">Points:</span>
//           <span className="ml-2 text-xl font-bold text-blue-600">{profile.points}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from 'react';

const Profile = () => {
  const [profile] = useState({
    name: 'Swetha',
    bio: 'A passionate web developer and skill swapper.',
    skillsHave: ['JavaScript', 'React', 'CSS'],
    skillsWant: ['Python', 'UI/UX Design'],
    points: 120,
    profileImage: 'src/User/assets/auth.jpeg',
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        My Profile
      </h1> */}

      <div className=" border border-gray-200 rounded-3xl shadow-xl p-8 ">
        {/* Profile header */}

        <div className="flex justify-between items-center">
        <div className="flex items-center gap-8 mb-6">
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-black shadow-md"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-red-500">{profile.name}</h2>
            <p className="text-gray-600 mt-2">{profile.bio}</p>
          </div>
        </div>
        <div className="flex gap-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-6 hover:cursor-pointer'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-6 hover:cursor-pointer'>
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-6 hover:cursor-pointer'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </div>
        </div>

                    {/* <p className="text-gray-600 mt-2 text-lg">{profile.bio}</p> */}

        {/* Skills section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label>Full Name</label>
          </div>
          <div>
            <label>Last Name</label>
          </div>
          <div>
            <label>Phone No</label>
          </div>
          <div>
            <label>Email</label>
          </div>
          <div>
            <label>Bio</label>
          </div>
        </div>

<div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
            <h3 className="font-semibold mb-3">
              Skills I Have
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skillsHave.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-red-100 text-red-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-red-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Skills I Want to Learn
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skillsWant.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-red-100 text-red-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-red-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          </div>
       
      </div>
    </div>
  );
};

export default Profile;
