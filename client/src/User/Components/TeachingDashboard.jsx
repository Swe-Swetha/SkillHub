
import React, { useState } from "react";
import {
  Search,
  Trash2,
  ExternalLink,
  Users,
  CalendarDays,
  Star,
  Coins,
} from "lucide-react";

const TeachingDashboard = () => {
  const stats = [
    {
      title: "Active Learners",
      value: 3,
      icon: <Users className="w-12 h-12 text-indigo-600" />,
    },
    {
      title: "Upcoming Sessions",
      value: 5,
      icon: <CalendarDays className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Rated Reviews",
      value: 4.5,
      icon: <Star className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "SkillBucks Earned",
      value: 120,
      icon: <Coins className="w-12 h-12 text-amber-500" />,
    },
  ];

  const initialRequests = [
    {
      learner: "Alice",
      profile: "https://randomuser.me/api/portraits/women/1.jpg",
      course: "React Basics",
      date: "2025-05-15",
      time: "10:00 AM",
      description: "I want to understand component lifecycles better.",
      teacherNote: "",
      link: "",
      showJoin: false,
      accepted: false,
    },
    {
      learner: "Bob",
      profile: "https://randomuser.me/api/portraits/men/2.jpg",
      course: "UX Design",
      date: "2025-05-14",
      time: "2:00 PM",
      description: "I need guidance on improving wireframe usability.",
      teacherNote: "",
      link: "",
      showJoin: false,
      accepted: false,
    },
    {
      learner: "Charlie",
      profile: "https://randomuser.me/api/portraits/men/3.jpg",
      course: "Node.js",
      date: "2025-05-13",
      time: "4:00 PM",
      description: "Help with setting up Express and MongoDB.",
      teacherNote: "",
      link: "",
      showJoin: false,
      accepted: false,
    },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequestIndex, setSelectedRequestIndex] = useState(null);
  const [search, setSearch] = useState("");

  const handleLinkChange = (index, value) => {
    const updated = [...requests];
    updated[index].link = value;
    setRequests(updated);
  };

  const handleTeacherNoteChange = (index, value) => {
    const updated = [...requests];
    updated[index].teacherNote = value;
    setRequests(updated);
  };

  const handleUpdate = (index) => {
    const updated = [...requests];
    updated[index].showJoin = true;
    setRequests(updated);
  };

  const handleAccept = (index) => {
    const updated = [...requests];
    updated[index].accepted = true;
    setRequests(updated);
  };

  const handleCancel = (index) => {
    const updated = [...requests];
    updated.splice(index, 1);
    setRequests(updated);
    setSelectedRequestIndex(null);
  };

  const filteredRequests = requests.filter(
    (req) =>
      req.learner.toLowerCase().includes(search.toLowerCase()) ||
      req.date.includes(search)
  );

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#161179] mb-8 drop-shadow-lg text-center">
        Welcome, Teacher!
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="relative p-6 rounded-2xl border border-transparent bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
    >
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center justify-center w-16 h-16 ">
          {stat.icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold uppercase text-gray-600 tracking-widest">
            {stat.title}
          </span>
          <span className="text-center text-3xl font-extrabold text-[#161179] leading-tight mt-1">
            {stat.value}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>


      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
        <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl flex flex-col border border-gray-200">
          <h2 className="text-2xl font-bold text-[#161179] mb-4">
            All Learner Requests
          </h2>
          <div className="relative mb-4">
            <Search className="absolute top-3 left-3 text-indigo-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or date"
              className="w-full pl-12 pr-4 py-2 border border-indigo-200 rounded-lg focus:ring-1 focus:ring-[#161179] focus:outline-none bg-white shadow-sm transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ul className="overflow-y-auto flex-grow custom-scrollbar pr-2">
            {filteredRequests.length === 0 && (
              <li className="text-center text-gray-400 py-8">No requests found</li>
            )}
            {filteredRequests.map((req, index) => (
              <li
                key={index}
                className={`mb-3 p-3 rounded-xl cursor-pointer flex justify-between items-center border border-transparent transition-all duration-200 ${
                  selectedRequestIndex === index
                    ? "bg-gray-100 shadow-lg"
                    : "hover:bg-[#f3f4f6]"
                }`}
                onClick={() => setSelectedRequestIndex(index)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={req.profile}
                    alt={req.learner}
                    className="w-12 h-12 rounded-full object-cover border border-[#161179] shadow"
                  />
                  <div>
                    <span className="font-semibold text-gray-700">{req.learner}</span>
                    <div className="text-xs text-gray-500">{req.date}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink
                    className="text-indigo-400 hover:text-indigo-600 cursor-pointer transition"
                    size={20}
                  />
                  <Trash2
                    className="text-gray-400 hover:text-red-500 cursor-pointer transition"
                    size={20}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancel(index);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl h-full overflow-y-auto border border-gray-200 flex flex-col">
          {selectedRequestIndex !== null && requests[selectedRequestIndex] ? (
            <div className="space-y-6 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-[#161179]">Request Details</h2>
              <div className="flex items-center space-x-5">
                <img
                  src={requests[selectedRequestIndex].profile}
                  alt={requests[selectedRequestIndex].learner}
                  className="w-20 h-20 rounded-full object-cover border border-[#161179] shadow-lg"
                />
                <div>
                  <p className="text-xl font-bold text-gray-800">
                    {requests[selectedRequestIndex].learner}
                  </p>
                  <p className="text-sm text-gray-600">
                    {requests[selectedRequestIndex].date} at{" "}
                    {requests[selectedRequestIndex].time}
                  </p>
                  <p className="text-sm text-indigo-500 font-semibold">
                    {requests[selectedRequestIndex].course}
                  </p>
                </div>
              </div>
              <div className="bg-[#f3f4f6] p-4 rounded-xl text-sm text-gray-700 shadow-inner border border-indigo-100">
                <strong className="block mb-1 text-indigo-600">
                  Description from Learner:
                </strong>
                {requests[selectedRequestIndex].description}
              </div>

              {!requests[selectedRequestIndex].accepted ? (
                <div className="flex space-x-3 mt-4">
                  <button
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-600 transition"
                    onClick={() => handleAccept(selectedRequestIndex)}
                  >
                    Accept Request
                  </button>
                  <button
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-600 transition"
                    onClick={() => handleCancel(selectedRequestIndex)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">
                      Google Meet Link
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Google Meet Link"
                      className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white shadow-sm transition"
                      value={requests[selectedRequestIndex].link}
                      onChange={(e) =>
                        handleLinkChange(selectedRequestIndex, e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-indigo-700 mb-1">
                      Description to Learner
                    </label>
                    <textarea
                      placeholder="Write something for the learner..."
                      className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white shadow-sm transition"
                      rows={3}
                      value={requests[selectedRequestIndex].teacherNote}
                      onChange={(e) =>
                        handleTeacherNoteChange(
                          selectedRequestIndex,
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <button
                    className="w-full bg-[#161179] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-indigo-800 transition"
                    onClick={() => handleUpdate(selectedRequestIndex)}
                  >
                    Update Link
                  </button>
                  {requests[selectedRequestIndex].showJoin &&
                    requests[selectedRequestIndex].link && (
                      <a
                        href={requests[selectedRequestIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition"
                      >
                        Start Class
                      </a>
                    )}
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400 text-lg font-semibold">
              No user is selected
            </div>
          )}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #a5b4fc;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default TeachingDashboard;
