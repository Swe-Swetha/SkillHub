// import React, { useState, useEffect, useRef } from 'react';
// import Skillbucks from './Skillbucks';
// import { useNavigate } from 'react-router-dom';

// const DashboardHeader = ({ activeTab, handleTabClick }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isSkillBuckOpen, setIsSkillBuckOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const profileRef = useRef();
//   const navigate = useNavigate();

//   const tabs = ["Explore", "Connect", "Blogs", "Earn Badge", "Leaderboard"];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Close dropdown if clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setIsProfileDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* HEADER */}
//       <div
//         className={`transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
//           } fixed top-0 left-0 w-full bg-white shadow-md z-50`}
//       >
//         <div className="flex justify-between p-6 items-center">
//           <div className="text-xl font-bold">SkillHub</div>

//           <ul className="flex gap-4">
//             {tabs.map((tab, id) => (
//               <li
//                 key={id}
//                 className={`hover:cursor-pointer rounded-full px-4 py-2 transition ${activeTab === tab ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
//                   }`}
//                 onClick={() => handleTabClick(tab)}
//               >
//                 {tab}
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-6 relative" ref={profileRef}>
//             <div className="flex flex-col justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-7 h-7'>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
// </svg>
// </div>
//             <div
//               className="w-10 h-10 text-xl flex items-center justify-center rounded-full bg-orange-400 text-white font-bold border border-orange-400 hover:bg-white hover:text-orange-400 hover:shadow-lg cursor-pointer transition-all"
//               onClick={() => setIsSkillBuckOpen(true)}
//             >
//               $
//             </div>

//             <div
//               className="hover:cursor-pointer relative"
//               onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//             >
//               Profile
//               {isProfileDropdownOpen && (
//                 <div className="absolute right-0 mt-4 w-40 bg-white border rounded shadow-md z-50">
//                   <ul className="text-sm text-gray-700">
//                     <li className="flex gap-1 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
// </svg>View Profile</li>
//                     <li className="flex gap-1 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
// </svg>
// My Badges</li>
//                     <li className="flex gap-1 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>{navigate('/settings')}} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
//   <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
// </svg>
// Settings</li>
//                     <li className="flex gap-1 items-center px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
// </svg>
// Logout</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SKILLBUCK MODAL OVERLAY */}
//       {isSkillBuckOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
//           <Skillbucks isOpen={setIsSkillBuckOpen} />
//         </div>
//       )}
//     </>
//   );
// };

// export default DashboardHeader;

import React, { useState, useEffect, useRef } from 'react';
import Skillbucks from './Skillbucks';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"

const DashboardHeader = ({ activeTab, handleTabClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSkillBuckOpen, setIsSkillBuckOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);

  const profileRef = useRef();
  const messageRef = useRef();
  const navigate = useNavigate();

  const tabs = ["Explore", "Connect", "Blogs", "Earn Badge", "Leaderboard"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdowns if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      if (messageRef.current && !messageRef.current.contains(event.target)) {
        setIsMessageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        className={`transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } fixed top-0 left-0 w-full bg-white shadow-md z-50`}
      >
        <div className="flex justify-between p-6 items-center">
          <div className="flex gap-1 items-center">
            <div className="">
              <img src={logo} width={40} />
            </div>
          <div className="text-xl font-bold">SkillHub</div>
</div>
          <ul className="flex gap-4">
            {tabs.map((tab, id) => (
              <li
                key={id}
                className={`hover:cursor-pointer rounded-full px-4 py-2 transition ${activeTab === tab ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
                  }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 relative" ref={profileRef}>
            {/* MESSAGE ICON WITH DROPDOWN */}
            <div ref={messageRef} className="relative">
              <div
                className="flex flex-col justify-center items-center cursor-pointer"
                onClick={() => setIsMessageDropdownOpen(!isMessageDropdownOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-7 h-7'>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              {isMessageDropdownOpen && (
                <div className="absolute right-0 mt-4 w-36 bg-white border rounded shadow-md z-50">
                  <ul className="text-sm text-gray-700">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsMessageDropdownOpen(false);
                        navigate('/mentor');
                      }}
                    >
                      Mentor
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsMessageDropdownOpen(false);
                        navigate('/enroll');
                      }}
                    >
                      Enroll
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* SKILLBUCK BUTTON */}
            <div
              className="w-10 h-10 text-xl flex items-center justify-center rounded-full bg-orange-400 text-white font-bold border border-orange-400 hover:bg-white hover:text-orange-400 hover:shadow-lg cursor-pointer transition-all"
              onClick={() => setIsSkillBuckOpen(true)}
            >
              $
            </div>

            {/* PROFILE DROPDOWN */}
            <div
              className="hover:cursor-pointer relative"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <img src={profile} width={40} />
              {/* Profile */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-4 w-40 bg-white border rounded shadow-md z-50">
                  <ul className="text-sm text-gray-700">
                    <li className="flex gap-1 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={()=>navigate('/profile')}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                      View Profile
                    </li>
                    <li className="flex gap-1 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={()=>navigate('/myBadges')}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
</svg>

                      My Badges
                    </li>
                    <li
                      className="flex gap-1 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate('/settings')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                      Settings
                    </li>
                    <li className="flex gap-1 items-center px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                    onClick={() => navigate('/loginform')}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-5 h-5'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>

                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SKILLBUCK MODAL */}
      {isSkillBuckOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <Skillbucks isOpen={setIsSkillBuckOpen} />
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
