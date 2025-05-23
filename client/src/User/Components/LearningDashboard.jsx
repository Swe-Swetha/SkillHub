import React, { useState } from "react";
import {
  Users,
  CalendarDays,
  Star,
  Video,
  Clock,
  Search,
  Trash2,
  ExternalLink,
  BookOpen,
} from "lucide-react";

const LearningDashboard = () => {
  const stats = [
    {
      title: "Classes Attended",
      value: 5,
      icon: <Video className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Pending Requests",
      value: 1,
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Total Courses",
      value: 4,
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
  ];

  const initialClasses = [
    {
      instructor: "Prof. Smith",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      course: "React Basics",
      date: "2025-05-18",
      time: "10:00 AM",
      status: "Accepted",
      link: "https://meet.google.com/example-link",
      instructorNote: "We will focus on hooks today.",
    },
    {
      instructor: "Dr. Adams",
      profile: "https://randomuser.me/api/portraits/women/44.jpg",
      course: "UX Design",
      date: "2025-05-19",
      time: "3:00 PM",
      status: "Pending",
      link: "",
      instructorNote: "",
    },
    {
      instructor: "Mr. John",
      profile: "https://randomuser.me/api/portraits/men/55.jpg",
      course: "Node.js",
      date: "2025-05-20",
      time: "1:00 PM",
      status: "Accepted",
      link: "",
      instructorNote: "Be ready with your MongoDB setup.",
    },
  ];

  const [classes, setClasses] = useState(initialClasses);
  const [selectedClassIndex, setSelectedClassIndex] = useState(null);
  const [search, setSearch] = useState("");

  const handleDelete = (index) => {
    const updated = [...classes];
    updated.splice(index, 1);
    setClasses(updated);
    if (selectedClassIndex === index) setSelectedClassIndex(null);
  };

  const filteredClasses = classes.filter(
    (cls) =>
      cls.instructor.toLowerCase().includes(search.toLowerCase()) ||
      cls.course.toLowerCase().includes(search.toLowerCase()) ||
      cls.date.includes(search)
  );

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#161179] mb-10 drop-shadow-lg text-center">
        Welcome, Learner!
      </h1>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center border border-gray-200 hover:scale-105 transition-transform duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-80 rounded-3xl pointer-events-none"></div>
            
            <h2 className="text-lg md:text-xl font-bold mb-2 tracking-wide uppercase text-gray-700 relative z-10">
              {stat.title}
            </h2>
            <div className="flex items-center justify-center">
              <p className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#161179] relative z-10">
                {stat.value}
              </p>
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full  scale-110 transition-transform duration-300">
                {stat.icon}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
        {/* Left Panel */}
        <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl flex flex-col border border-gray-200">
          <h2 className="text-2xl font-bold text-[#161179] mb-4">My Classes</h2>
          <div className="relative mb-4">
            <Search
              className="absolute top-3 left-3 text-indigo-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by instructor, course, or date"
              className="w-full pl-12 pr-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white shadow-sm transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className="overflow-y-auto flex-grow custom-scrollbar pr-2">
            {filteredClasses.length === 0 && (
              <li className="text-center text-gray-400 py-8">
                No classes found
              </li>
            )}
            {filteredClasses.map((cls, index) => (
              <li
                key={index}
                onClick={() => setSelectedClassIndex(index)}
                className={`mb-3 p-3 rounded-xl cursor-pointer flex justify-between items-center border border-transparent transition-all duration-200 ${
                  selectedClassIndex === index
                    ? "bg-gray-100 shadow-lg"
                    : "hover:bg-[#f3f4f6]"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={cls.profile}
                    alt={cls.instructor}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200 shadow"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">{cls.course}</p>
                    <div className="text-xs text-gray-500">
                      {cls.date} at {cls.time}
                    </div>
                    <div
                      className={`text-xs italic ${
                        cls.status === "Accepted"
                          ? "text-green-600"
                          : cls.status === "Pending"
                          ? "text-yellow-600"
                          : cls.status === "Denied"
                          ? "text-red-600"
                          : "text-gray-400"
                      }`}
                    >
                      {cls.status}
                    </div>
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
                      handleDelete(index);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Panel */}
        <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl h-full overflow-y-auto border border-gray-200 flex flex-col">
          {selectedClassIndex !== null && classes[selectedClassIndex] ? (
            <div className="space-y-6 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-[#161179]">
                Class Details
              </h2>
              <div className="flex items-center space-x-5">
                <img
                  src={classes[selectedClassIndex].profile}
                  alt={classes[selectedClassIndex].instructor}
                  className="w-20 h-20 rounded-full object-cover border-4 border-indigo-200 shadow-lg"
                />
                <div>
                  <p className="text-xl font-bold text-gray-800">
                    {classes[selectedClassIndex].instructor}
                  </p>
                  <p className="text-sm text-gray-600">
                    {classes[selectedClassIndex].date} at{" "}
                    {classes[selectedClassIndex].time}
                  </p>
                  <p className="text-sm text-indigo-500 font-semibold">
                    {classes[selectedClassIndex].course}
                  </p>
                  <p
                    className={`text-sm font-medium mt-1 ${
                      classes[selectedClassIndex].status === "Accepted"
                        ? "text-green-600"
                        : classes[selectedClassIndex].status === "Pending"
                        ? "text-yellow-600"
                        : classes[selectedClassIndex].status === "Denied"
                        ? "text-red-600"
                        : "text-gray-400"
                    }`}
                  >
                    Status: {classes[selectedClassIndex].status}
                  </p>
                </div>
              </div>
              {classes[selectedClassIndex].instructorNote && (
                <div className="bg-[#f3f4f6] p-4 rounded-xl text-sm text-gray-700 shadow-inner border border-indigo-100">
                  <strong className="block mb-1 text-indigo-600">
                    Instructor's Note:
                  </strong>
                  {classes[selectedClassIndex].instructorNote}
                </div>
              )}
              {classes[selectedClassIndex].status === "Accepted" &&
                classes[selectedClassIndex].link && (
                  <a
                    href={classes[selectedClassIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition"
                  >
                    Join Class
                  </a>
                )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400 text-lg font-semibold">
              No class is selected
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

export default LearningDashboard;
