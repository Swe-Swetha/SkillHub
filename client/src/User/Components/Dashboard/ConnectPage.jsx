
import React, { useState, useEffect, useMemo } from "react";
import connect1 from "../../assets/connect1.avif";
import connect2 from "../../assets/connect2.avif";
import connect3 from "../../assets/connect3.avif";
import connect4 from "../../assets/connect4.avif";
import connect5 from "../../assets/connect5.avif";
import connect6 from "../../assets/connect6.avif";
import { useNavigate } from "react-router-dom";
import { UserSearch, GraduationCap } from "lucide-react";

const ConnectPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBadge, setSelectedBadge] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const sampleUsers = [
      {
        _id: "1",
        name: "Archana",
        skills: ["JavaScript", "React"],
        des: "Mobile app developer creating beautiful experiences",
        badge: "Beginner",
        photoUrl: "https://randomuser.me/api/portraits/women/48.jpg",
      },
      {
        _id: "2",
        name: "Smith",
        skills: ["UI/UX", "Figma"],
        des: "Designing intuitive and elegant user interfaces.",
        badge: "Intermediate",
        photoUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        _id: "3",
        name: "Charlie",
        skills: ["Python", "Data Science", "Machine Learning"],
        des: "Data scientist with a passion for turning data into actionable insights.",
        badge: "Beginner",
        photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        _id: "4",
        name: "Swetha",
        skills: ["Python", "Data Science", "SQL", "AI"],
        des: "AI enthusiast building smarter solutions.",
        badge: "Expert",
        photoUrl: "https://randomuser.me/api/portraits/women/50.jpg",
      },
      {
        _id: "5",
        name: "Harshini",
        skills: ["Java", "Data Science"],
        des: "Engineer diving into Java backend and ML.",
        badge: "Intermediate",
        photoUrl: "https://randomuser.me/api/portraits/women/55.jpg",
      },
      {
        _id: "6",
        name: "Mugu",
        skills: ["Python", "Data Science", "Pandas"],
        des: "Data wrangler and analyst.",
        badge: "Expert",
        photoUrl: "https://randomuser.me/api/portraits/men/46.jpg",
      },
    ];
    setUsers(sampleUsers);
  }, []);

  const uniqueBadges = [...new Set(users.map((user) => user.badge).filter(Boolean))];
  const uniqueSkills = [...new Set(users.flatMap((user) => user.skills || []))];

  const badgeStyles = {
    Expert: "bg-red-100 text-red-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Beginner: "bg-blue-100 text-blue-700",
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesBadge = selectedBadge ? user.badge === selectedBadge : true;
      const matchesSkill = selectedSkill ? user.skills.includes(selectedSkill) : true;
      return matchesSearch && matchesBadge && matchesSkill;
    });
  }, [searchTerm, users, selectedBadge, selectedSkill]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <div className="relative">
        <h1 className="text-3xl font-bold text-center mt-4 text-[#161179]">Find Skill Partners</h1>
        <p className="text-center text-gray-700 mb-2">
          A thriving hub where learners and mentors connect, exchange knowledge, and grow meaningful relationships through skill-sharing.
        </p>

        <div className="flex flex-wrap justify-center">
          {[connect5, connect2, connect3, connect1, connect6, connect4].map((img, idx) => (
            <img key={idx} src={img} width={245} className="rounded-lg" loading="lazy" />
            
          ))}
        </div>

        {/* Mentor & Mentoring Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2 mt-2">
          <div className="bg-blue-50 shadow-lg rounded-2xl p-6 w-[470px] flex flex-col items-center text-center border border-gray-200">
            <div className="flex items-center gap-1">
            <UserSearch className="w-10 h-10 text-blue-600" />
            <h2 className="text-xl text-blue-600 font-semibold">Find a Mentor</h2></div>
            <p className="text-gray-600 mb-4">
              Connect with experts to grow your skills.
            </p>
            <button
              onClick={() => navigate("/my-learning")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              My Learning
            </button>
          </div>

          <div className="bg-green-50 shadow-lg rounded-2xl p-6 w-[470px] flex flex-col items-center text-center border border-gray-200">
            <div className="flex items-center gap-2">
            <GraduationCap className="w-10 h-10 text-green-600" />
            <h2 className="text-xl text-green-600 font-semibold">Start Mentoring</h2></div>
            <p className="text-gray-600 mb-4">
              Share your knowledge and inspire others.
            </p>
            <button
              onClick={() => navigate("/my-teaching")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              My Teaching
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-4 px-6 mt-4">
          <input
            type="text"
            placeholder="Search by name or skill"
            className="w-full sm:w-[500px] md:w-[600px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring focus:ring-red-200"
          >
            <option value="">All Skills</option>
            {uniqueSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>

          <select
            value={selectedBadge}
            onChange={(e) => setSelectedBadge(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring focus:ring-red-200"
          >
            <option value="">Badges</option>
            {uniqueBadges.map((badge) => (
              <option key={badge} value={badge}>
                {badge}
              </option>
            ))}
          </select>
        </div>

        {/* User Cards */}
        <div className="p-6 max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="flex flex-col justify-between bg-gradient-to-br from-blue-50 to-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1  min-h-[260px]"
              >
                <div>
                  <div className="flex gap-4 items-center">
                    {user.photoUrl ? (
                      <img
                        src={user.photoUrl}
                        alt={`${user.name} profile`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#161179]"
                      />
                    ) : (
                      <div className="w-16 h-16 border-2 border-red-500 text-red-500 rounded-full flex items-center justify-center text-xl font-bold bg-white select-none">
                        {getInitials(user.name)}
                      </div>
                    )}
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        {user.name}
                        {user.badge && (
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              badgeStyles[user.badge] || "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {user.badge}
                          </span>
                        )}
                      </h2>
                    </div>
                  </div>
                  <div className="mt-3 text-gray-700 text-sm">
                    {user.des || "No description provided."}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 mt-4 items-center text-sm">
                    Skills:
                    {user.skills.slice(0, 2).map((skill, index) => (
                      <span
                        key={index}
                        className="border border-[#161179] text-[#161179] px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {user.skills.length > 2 && (
                      <span className="text-gray-500">+{user.skills.length - 2} more</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-auto">
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
                  <button className="flex gap-2 items-center bg-[#161179] text-white px-4 py-2 rounded-lg hover:bg-[#161179] transition duration-200">
                    <svg
                      className="w-6 h-6"
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
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No users match your search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectPage;
