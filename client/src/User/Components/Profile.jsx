import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6  min-h-screen relative mt-4">
      {/* Back to Home Button */}
      <button
        className="absolute -top-1 right-6 bg-white text-blue-600 font-semibold px-4 py-2"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      {/* Header */}
      <div className="bg-[#161179] text-white rounded-xl p-6 flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="profile"
            className="rounded-full w-16 h-16"
          />
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <div className="flex gap-2 text-sm mt-1">
              <span className="bg-white text-black px-2 py-0.5 rounded">
                425 Skillbucks
              </span>
              {/* Level badge with color */}
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">
                Intermediate
              </span>
              {/* Example for Advanced: */}
              {/* <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-semibold">Advanced</span> */}
              {/* Example for Beginner: */}
              {/* <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">Beginner</span> */}
            </div>
          </div>
        </div>
        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition">
          Edit Profile
        </button>
      </div>

      {/* About & Contact */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-[#161179]">About</h3>
          <p className="text-gray-700 mt-1">
            Frontend developer with 5 years of experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-[#161179]">Skills I Have</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                UI Design
              </span>
            </div>

            <h3 className="font-semibold mt-4 text-[#161179]">Skills I Want</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-800">
                TypeScript
              </span>
              <span className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-800">
                Machine Learning
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#161179]">Contact</h3>
            <p className="text-gray-700">Email: john@example.com</p>
            <p className="text-gray-700">Phone: +1 (234) 567-8901</p>
          </div>
        </div>
      </div>

      {/* Badges & Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Earned Badges */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-[#161179]">Earned Badges</h3>
            <button className="text-blue-600 text-sm">Earn More</button>
          </div>
          <div className="flex gap-4">
            <div className="bg-gray-100 p-4 rounded text-center w-full">
              {/* Removed badge emoji */}
              <div className="text-sm mt-2 flex flex-col gap-2">
                <span className="ml-2">JavaScript</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                  Beginner
                </span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center w-full">
              {/* Removed badge emoji */}
              <div className="text-sm mt-2  flex flex-col gap-2">
                <span className="ml-2">React</span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">
                  Intermediate
                </span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center w-full">
              {/* Removed badge emoji */}
              <div className="text-sm mt-2  flex flex-col gap-2 ">
                <span className="ml-2">Web Design</span>
                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">
                  Advanced
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Connections */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-[#161179]">Connections</h3>
            <button className="text-blue-600 text-sm">Find More</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=3"
                className="rounded-full w-10 h-10"
              />
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-gray-500">
                  Python, Data Science
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=5"
                className="rounded-full w-10 h-10"
              />
              <div>
                <div className="font-medium">Alex Johnson</div>
                <div className="text-sm text-gray-500">UX Design, Figma</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg text-[#161179]">Enrolled Courses</h3>
          <button className="text-blue-600 text-sm">Explore More</button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-md">
            <h4 className="font-semibold">React Fundamentals</h4>
            <p className="text-sm text-gray-600">John Doe</p>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mt-1 inline-block">
              Beginner
            </span>
          </div>
          <div className="border p-4 rounded-md">
            <h4 className="font-semibold">UI/UX Design Principles</h4>
            <p className="text-sm text-gray-600">Jane Smith</p>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full mt-1 inline-block">
              Intermediate
            </span>
          </div>
          <div className="border p-4 rounded-md">
            <h4 className="font-semibold">Data Science Essentials</h4>
            <p className="text-sm text-gray-600">Alex Johnson</p>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full mt-1 inline-block">
              Intermediate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
