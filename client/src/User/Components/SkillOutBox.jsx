
// import React, { useState, useEffect } from "react";
// import profile from "../assets/auth.jpeg";

// const SkillOutbox = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [meetLink, setMeetLink] = useState("");

//   useEffect(() => {
//     const sampleUsers = [
//       { _id: "1", name: "Alice Johnson" },
//       { _id: "2", name: "Bob Smith" },
//       { _id: "3", name: "Charlie Ray" },
//       { _id: "4", name: "Swetha" },
//       { _id: "5", name: "Harshini" },
//       { _id: "6", name: "Mugundhan" },
//       { _id: "7", name: "Kavitha" },
//     ];

//     setUsers(sampleUsers);
//     setFilteredUsers(sampleUsers);
//   }, []);

//   useEffect(() => {
//     const lowerSearch = searchTerm.toLowerCase();
//     const results = users.filter((user) =>
//       user.name.toLowerCase().includes(lowerSearch)
//     );
//     setFilteredUsers(results);
//   }, [searchTerm, users]);

//   const handleDelete = (userId) => {
//     const updatedUsers = users.filter((user) => user._id !== userId);
//     setUsers(updatedUsers);
//     setFilteredUsers(updatedUsers);
//     if (selectedUser && selectedUser._id === userId) {
//       setSelectedUser(null);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto mt-8 flex gap-6">
//       {/* Left Panel */}
//       <div className="w-1/3 border rounded-lg p-4 shadow bg-white flex flex-col">
//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-1 focus:ring-blue-800"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* User List */}
//         <div className="overflow-y-auto h-[400px]">
//           {filteredUsers.map((user) => (
//             <div
//               key={user._id}
//               className="flex justify-between gap-3 py-2 border-b hover:bg-gray-100 group"
//             >
             

//               {/* User Info */}
//               <div
//                 className="flex items-start gap-3 cursor-pointer flex-1"
//               >
//                 <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center font-bold rounded-full mt-1">
//                   {user.name[0]}
//                 </div>
//                 <div className="font-medium">
//                   {user.name}
//                   <div className="text-xs text-gray-500">
//                     Date: {user.requestDate}
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Time: {user.requestTime}
//                   </div>
//                 </div>
//               </div>
//                {/* Buttons */}
//               <div className="flex gap-2 mr-4">
//                 <button onClick={() => setSelectedUser(user)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
// </svg>
//                 </button>
//                 <button onClick={() => handleDelete(user._id)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
//   <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
// </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Panel */}
//       <div className="w-2/3 border rounded-lg p-4 shadow bg-white flex flex-col justify-between">
//         {/* Upper Split */}
//         <div className="w-full mb-4 relative">
//           <div className="border border-gray-300 rounded-lg p-4 h-[150px] mb-4 relative">
//             {selectedUser ? (
//               <>
//                 <div className="absolute top-2 right-2">
//                   <button
//                     className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 "
//                     onClick={() => setSelectedUser(null)}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
// </svg>

//                   </button>
//                 </div>
//                 <div className="flex items-center gap-4 h-full">
//                   <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center font-bold rounded-full text-xl">
//                     {selectedUser.name[0]}
//                   </div>
//                   <div>
//                     <div className="text-xl font-semibold">{selectedUser.name}</div>
//                     <div className="text-sm text-gray-600">
//                       Date: {selectedUser.requestDate}
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       Time: {selectedUser.requestTime}
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <p className="text-gray-500 text-center h-full flex items-center justify-center">
//                 No user selected
//               </p>
//             )}
//           </div>

//           {/* Bottom Half */}
//           <div className="border border-gray-300 rounded-lg p-4 h-[250px]">
//             <div className="flex gap-2 items-center mb-2">
//               <img
//                 src={profile}
//                 alt="My Profile"
//                 className="w-[70px] h-[70px] rounded-full border border-gray-400"
//               />
//               <div className="text-xl font-semibold">Your Name</div>
//             </div>

//             <textarea
//               rows="2"
//               placeholder="Enter description..."
//               className="w-full p-2 border rounded mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//             ></textarea>

//             <input
//               type="text"
//               placeholder="Enter Google Meet link"
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={meetLink}
//               onChange={(e) => setMeetLink(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-4">
//           <button className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800">
//             Cancel
//           </button>
//           <button className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillOutbox;
import React, { useState, useEffect } from "react";
import profile from "../assets/auth.jpeg";

const SkillOutbox = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [meetLink, setMeetLink] = useState("");

  useEffect(() => {
    const sampleUsers = [
      { _id: "1", name: "Alice Johnson" },
      { _id: "2", name: "Bob Smith" },
      { _id: "3", name: "Charlie Ray" },
      { _id: "4", name: "Swetha" },
      { _id: "5", name: "Harshini" },
      { _id: "6", name: "Mugundhan" },
      { _id: "7", name: "Kavitha" },
    ];

    setUsers(sampleUsers);
    setFilteredUsers(sampleUsers);
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(lowerSearch)
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user._id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    if (selectedUser && selectedUser._id === userId) {
      setSelectedUser(null);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6">
      <div className="h-full w-full flex gap-6">
        {/* Left Panel */}
        <div className="w-1/3 border rounded-lg p-4 shadow bg-white flex flex-col">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-1 focus:ring-blue-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="h-[600px]">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="flex justify-between gap-3 py-2 border-b hover:bg-gray-100 group"
              >
                <div
                  className="flex items-start gap-3 cursor-pointer flex-1"
                >
                  <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center font-bold rounded-full mt-1">
                    {user.name[0]}
                  </div>
                  <div className="font-medium">
                    {user.name}
                    <div className="text-xs text-gray-500">
                      Date: {user.requestDate}
                    </div>
                    <div className="text-xs text-gray-500">
                      Time: {user.requestTime}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mr-4">
                  <button onClick={() => setSelectedUser(user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
</svg>

                  </button>
                  <button onClick={() => handleDelete(user._id)}>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-2/3 border rounded-lg p-4 shadow bg-white flex flex-col justify-between">
        <div className="">
        <h1 className="pb-6 pt-4 text-center font-bold text-2xl">MENTOR ACCEPTANCE</h1>
          <div className="w-full mb-4 relative">
            <div className="border border-gray-300 rounded-lg p-4 h-[150px] mb-4 relative">
              {selectedUser ? (
                <>
                  <div className="absolute top-2 right-2">
                    <button
                      className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      onClick={() => setSelectedUser(null)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-4 h-full">
                    <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center font-bold rounded-full text-xl">
                      {selectedUser.name[0]}
                    </div>
                    <div>
                      <div className="text-xl font-semibold">{selectedUser.name}</div>
                      <div className="text-sm text-gray-600">Date: {selectedUser.requestDate}</div>
                      <div className="text-sm text-gray-600">Time: {selectedUser.requestTime}</div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 text-center h-full flex items-center justify-center">
                  No user selected
                </p>
              )}
            </div>

            <div className="border border-gray-300 rounded-lg p-4 h-[250px]">
              <div className="flex gap-2 items-center mb-2">
                <img
                  src={profile}
                  alt="My Profile"
                  className="w-[70px] h-[70px] rounded-full border border-gray-400"
                />
                <div className="text-xl font-semibold">Your Name</div>
              </div>

              <textarea
                rows="2"
                placeholder="Enter description..."
                className="w-full p-2 border rounded mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <input
                type="text"
                placeholder="Enter Google Meet link"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={meetLink}
                onChange={(e) => setMeetLink(e.target.value)}
              />
            </div>
          </div>
          </div>

          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800">Cancel</button>
            <button className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillOutbox;
