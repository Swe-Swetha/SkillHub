import React, { useState, useEffect } from "react";
import teaching from "../../assets/teaching.avif";
import enrolling from "../../assets/enrolling.avif";
import connect1 from "../../assets/connect1.avif";
import connect2 from "../../assets/connect2.avif";
import connect3 from "../../assets/connect3.avif";
import connect4 from "../../assets/connect4.avif";
import connect5 from "../../assets/connect5.avif";
import connect6 from "../../assets/connect6.avif";

import { useNavigate } from "react-router-dom";

const ConnectPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [outbox, setOutbox] = useState(false);
  const [inbox, setInbox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const sampleUsers = [
      { _id: "1", name: "Alice Johnson", skills: ["JavaScript", "React"] },
      { _id: "2", name: "Bob Smith", skills: ["UI/UX", "Figma"] },
      {
        _id: "3",
        name: "Charlie Ray",
        skills: ["Python", "Data Science", "Machine Learning"],
      },
      {
        _id: "4",
        name: "Swetha",
        skills: ["Python", "Data Science", "SQL", "AI"],
      },
      { _id: "5", name: "Harshini", skills: ["Java", "Data Science"] },
      {
        _id: "6",
        name: "Mugundhan",
        skills: ["Python", "Data Science", "Pandas"],
      },
      {
        _id: "7",
        name: "Kavitha",
        skills: ["Python", "Data Science", "ML", "DL"],
      },
    ];
    setUsers(sampleUsers);
    setFilteredUsers(sampleUsers);
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const results = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerSearch) ||
        user.skills.some((skill) => skill.toLowerCase().includes(lowerSearch))
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  return (
    <>
      {/* Outbox Modal */}
      {outbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 w-full h-screen">
          <div className="bg-white border border-gray-400 p-4 max-w-lg text-center rounded-lg hover:shadow-xl relative">
            <button
              onClick={() => setOutbox(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img src={teaching} width={400} className="mx-auto" />
            <h2 className="font-bold text-xl mt-4">Become a Mentor</h2>
            <p className="mt-2 text-gray-700">
              Share your skills and inspire learners worldwide. Create and offer
              courses on topics you're passionate about, connect with eager
              students, and grow your teaching journey.
            </p>
            <button
              className="bg-gray-600 text-white w-full py-2 mt-4"
              onClick={() => navigate("/mentor")}
            >
              Start Teaching
            </button>
          </div>
        </div>
      )}

      {/* Inbox Modal */}
      {inbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 w-full h-screen">
          <div className="bg-white border border-gray-400 p-4 max-w-lg text-center rounded-lg hover:shadow-xl relative">
            <button
              onClick={() => setInbox(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img src={enrolling} width={400} className="mx-auto" />
            <h2 className="font-bold text-xl mt-4">Learn New Skills</h2>
            <p className="mt-2 text-gray-700">
              Unlock new knowledge and enhance your abilities. Browse and enroll
              in courses taught by skilled mentors, tailored to help you learn
              at your pace and achieve your goals.
            </p>
            <button className="bg-gray-600 text-white w-full py-2 mt-4">
              Book Courses
            </button>
          </div>
        </div>
      )}

      <div className="relative">
        <h1 className="text-3xl font-bold text-center mt-2">
          Find Skill Partners
        </h1>

        <div className="flex flex-wrap justify-center">
          <img src={connect5} width={245} />
          <img src={connect2} width={245} />
          <img src={connect3} width={245} />
          <img src={connect1} width={245} />
          <img src={connect6} width={245} />
          <img src={connect4} width={245} />
        </div>

        <div className="text-center mt-2">
          A community where skills are shared and friendships are formed. Start
          your journey of learning and collaboration.
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <div className="w-full max-w-xl h-[150px] p-4 rounded-2xl shadow-md bg-gray-100">
            <p className="font-bold text-lg mt-2">Find a Mentor</p>
            <p>
              Connect with experts who can guide you through your learning
              journey.
            </p>

            <button className="flex gap-2 items-center mt-2 bg-[#003092] px-4 py-2 text-white rounded-lg cursor-pointer font-bold">
              Find Mentors
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="w-full max-w-xl h-[150px] p-4 rounded-2xl shadow-md bg-gray-100">
            <p className="font-bold text-lg mt-2">Become a Mentor</p>
            <p>Share your expertise, help others learn, and earn Skillbucks.</p>
            <button className="flex gap-2 items-center mt-2 bg-[#003092] px-4 py-2 text-white rounded-lg cursor-pointer font-bold">
              Start Mentoring
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-4">
          <input
            type="text"
            className="w-[690px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400"
            placeholder="Search by name or skill (e.g., graphic design, JavaScript)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex items-center gap-2 border border-gray-300 px-20 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>

            <button className="">Filter</button>
          </div>
          <div className="flex items-center gap-2 border border-gray-300 px-20 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>

            <button className="">Filter</button>
          </div>
          {/* <button
            className="bg-green-500 hover:bg-green-600 transition duration-200 text-white px-4 rounded-lg cursor-pointer"
            onClick={() => setOutbox(true)}
          >
            Skill Outbox
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 transition duration-200 text-white px-4 rounded-lg cursor-pointer"
            onClick={() => setInbox(true)}
          >
            Skill Inbox
          </button> */}
        </div>

        <div className="p-6 max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="flex flex-col justify-between bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[260px]"
              >
                <div className="">
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 border border-red-500 text-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {user.name[0]}
                    </div>
                    <div className="">
                      <h2 className="text-xl font-bold text-gray-800 ">
                        {user.name}
                      </h2>
                      <h2 className="">Expert</h2>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 flex-grow mt-4">
                    Mobile app developer creating beautiful experiences
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 flex-grow mt-4">
                    Skills :
                    {user.skills.slice(0, 2).map((skill, index) => (
                      <span
                        key={index}
                        className="border border-red-500 text-red-500 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {user.skills.length > 2 && (
                      <span className="text-gray-500 text-sm">
                        +{user.skills.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-blue-600 cursor-pointer">
                    <div className="">
                      <button className="">View Profile</button>
                    </div>
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <button className="flex gap-2 items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>

                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No users match your search.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectPage;
