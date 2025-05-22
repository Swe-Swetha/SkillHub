import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CourseMatch = () => {
  const location = useLocation();
  const course = location.state;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const relatedUsers = [
    {
      _id: "1",
      name: "Archana",
      badge: "Beginner",
      skills: ["React", "JavaScript"],
      des: "Mobile app developer creating beautiful experiences.",
      photoUrl: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      _id: "2",
      name: "Smith",
      badge: "Intermediate",
      skills: ["React", "Figma"],
      des: "Designing intuitive and elegant user interfaces.",
      photoUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      _id: "3",
      name: "Swetha",
      badge: "Expert",
      skills: ["React", "AI"],
      des: "AI enthusiast building smarter frontend solutions.",
      photoUrl: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      _id: "4",
      name: "Rahul",
      badge: "Intermediate",
      skills: ["Node.js", "React"],
      des: "Full-stack developer with a love for backend magic.",
      photoUrl: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      _id: "5",
      name: "Divya",
      badge: "Beginner",
      skills: ["HTML", "CSS", "JavaScript"],
      des: "Frontend enthusiast learning to build responsive UIs.",
      photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      _id: "6",
      name: "Anil",
      badge: "Expert",
      skills: ["React", "Next.js", "TypeScript"],
      des: "Crafting scalable frontend architectures.",
      photoUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const badgeStyles = {
    Expert: "bg-red-100 text-red-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Beginner: "bg-blue-100 text-blue-700",
  };

  const filteredUsers = relatedUsers.filter((user) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerSearch) ||
      user.skills.some((skill) => skill.toLowerCase().includes(lowerSearch))
    );
  });

  if (!course) {
    return (
      <div className="text-center mt-20">
        <p className="text-lg text-gray-700">Course not found.</p>
        <button
          onClick={() => navigate("/viewMoreCourse")}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#161179] py-4 px-6 flex justify-between items-center mb-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-6">
            <img
              src={course.image}
              alt={course.title}
              className="w-20 h-20 rounded-full object-cover "
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{course.title}</h1>
              <p className="text-white">{course.description}</p>
            </div>
          </div>
          <div className="flex gap-1 items-center text-white font-medium pr-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <button
            onClick={() => navigate("/viewMoreCourse")}
            className=""
          >
            Back to Courses
          </button></div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[#161179] shadow-sm focus:ring-1 focus:ring-[#161179] focus:outline-none"
          />
        </div>

        <h2 className="text-xl font-semibold text-[#161179] mb-4">
          People Related to This Course
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className=" bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-6"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={user.photoUrl}
                    alt={`${user.name} profile`}
                    className="w-16 h-16 rounded-full border-2 border-[#161179] object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      {user.name}
                      {user.badge && (
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            badgeStyles[user.badge] ||
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {user.badge}
                        </span>
                      )}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-3">{user.des}</p>

                <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
                  <span className="font-medium text-gray-600">Skills:</span>
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="border border-[#161179] text-[#161179] px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button className="text-[#161179] font-semibold hover:underline flex items-center gap-1">
                    View Profile
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  <button className="flex gap-2 items-center bg-[#161179] text-white px-4 py-2 rounded-lg hover:bg-[#161179]/90 transition">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                    Connect
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">
              No matching users found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseMatch;
