import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coin from "../assets/LessCoins.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const [profile] = useState({
    firstName: 'Swetha',
    lastName: 'Jayaprakash',
    phone: '8754004599',
    email: 'swetha@gmail.com',
    bio: 'A passionate web developer and skill swapper.',
    skillsHave: ['JavaScript', 'React', 'CSS'],
    skillsWant: ['Python', 'UI/UX Design'],
    points: 120,
    profileImage: 'src/User/assets/auth.jpeg',
  });

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gray-50">
      <div className="w-full max-w-5xl mx-auto px-6 py-10 relative">
        <div className={`border border-gray-200 rounded-3xl shadow-xl p-8 bg-white transition duration-300 ${isEditing ? 'blur-sm ' : ''}`}>
          {/* Profile Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8 mb-6">
              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-black shadow-md"
              />
              <div className="text-center md:text-left">
                <div className="flex items-center">
                <span className="text-3xl font-bold text-red-500 pr-8">{profile.firstName}{profile.lastName}</span>
                <span className='text-xl px-1 font-bold text-yellow-500 cursor-pointer'>{profile.points}</span>
                <span className='cursor-pointer'><img src={coin} width={30}/></span>
                </div>
                <p className="text-gray-600 mt-2">{profile.bio}</p>
              </div>
            </div>
            <div className="flex gap-6">
              {/* Edit Button */}
              <svg
                onClick={() => setIsEditing(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:cursor-pointer"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
              </svg>

              {/* Cancel Button */}
              <svg
                onClick={() => navigate('/')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:cursor-pointer"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Info Section */}
          <form>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label>Full Name</label>
              <div>{profile.firstName}</div>
            </div>
            <div>
              <label>Last Name</label>
              <div>{profile.lastName}</div>
            </div>
            <div>
              <label>Phone No</label>
              <div>{profile.phone}</div>
            </div>
            <div>
              <label>Email</label>
              <div>{profile.email}</div>
            </div>
            <div>
              <label>Bio</label>
              <div>{profile.bio}</div>
            </div>
          </div>
          </form>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Skills I Have</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skillsHave.map((skill, idx) => (
                  <span
                    key={idx}
                    className="border border-red-500 text-red-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-red-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Skills I Want to Learn</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skillsWant.map((skill, idx) => (
                  <span
                    key={idx}
                    className="border border-red-500 text-red-500 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-red-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Overlay */}
        {isEditing && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-3xl bg-black/30 backdrop-blur-sm z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl w-full">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 ">
            <div>
              <div>Full Name</div>
              <input placeholder='Full name' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
            </div>
            <div>
              <div>Last Name</div>
              <input placeholder='Last name' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
            </div>
            <div>
              <div>Phone No</div>
              <input placeholder='Phone No' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
            </div>
            <div>
              <div>Email</div>
              <input placeholder='Email' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
            </div>
            <div>
              <div>Skill I Have</div>
              <input placeholder='Skill I Have' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
            </div>
            <div>
              <div>Skill I Want</div>
              <input placeholder='Skill I Want' className='border border-gray-400 py-1 px-2 rounded-md w-full focus:outline-none focus:border-green-500'/>
            </div>
           
          </div>
                <textarea placeholder="Bio" className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-green-500" rows={2}></textarea>
              </form>


              <div className="flex justify-end mt-4 gap-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
