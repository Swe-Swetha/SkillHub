
import React from "react";
import auth from "../assets/auth.jpeg";

function OthersProfile() {
  const userData = {
    name: "Swetha",
    location: "Puducherry, India",
    aboutMe:
      "I'm a Passionate Web Developer 🚀 with high problem solving skills, looking forward to teach what I know And learn what I don't.",
    skillsTeach: {
      Python: "Intermediate",
      Java: "Beginner",
      React: "Pro",
      Love: "Very Poor",
    },
    skillsLearn: {
      Photoshop: "Beginner",
      Illustrator: "No Exp",
      Figma: "No Exp",
      Css: "No Exp",
    },
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Header with background and profile image */}
      <div className="relative h-[300px] w-full  bg-gradient-to-tl from-blue-300 via-purple-400 to-indigo-300">
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 z-50">
          <img
            className="w-[150px] h-[150px] rounded-full shadow-xl border-4 border-white"
            src={auth}
            alt="Profile"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="absolute top-28 bg-white w-full max-w-3xl h-[600px] shadow-2xl rounded-3xl overflow-hidden">
          {/* Header Buttons */}
          <div className="flex justify-between px-4 pt-4">
            <div className="flex items-center space-x-2 p-2 cursor-pointer hover:text-red-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <h1 className="font-semibold">Close</h1>
            </div>
            <div className="flex items-center space-x-2 p-2 cursor-pointer hover:text-green-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              <h1 className="font-semibold">Connect</h1>
            </div>
          </div>

          {/* About Self */}
          <div className="flex flex-col justify-center items-center mt-10 space-y-1">
            <h1 className="font-bold text-3xl">{userData.name}</h1>
            {/* <p className="text-gray-600">{userData.location}</p> */}
            <div className="flex gap-2 flex-wrap justify-center">
              {Object.keys(userData.skillsTeach).map((skill) => (
                <span
                  key={skill}
                  className=" text-red-500 border border-red-300 text-sm px-3 py-1 rounded-full shadow-sm mt-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-4 w-[700px] rounded-xl overflow-auto px-4 text-gray-700">
            <p>{userData.aboutMe}</p>
          </div>

         {/* Skills Section */}
<div className="flex flex-col md:flex-row justify-between mt-4 px-10 gap-6">
  {/* Skills I'm Teaching */}
  <div className="w-full md:w-1/2 bg-white rounded-2xl p-4 shadow-lg border-t-4 border-yellow-400 transition hover:shadow-xl">
    <h2 className="text-xl font-semibold text-yellow-600 mb-4">🧑‍🏫 Skills I'm Teaching</h2>
    <div className="flex flex-wrap gap-3">
      {Object.entries(userData.skillsTeach).map(([skill, level]) => (
        <div
          key={skill}
          className="flex justify-between items-center bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-xl px-4 py-2 hover:bg-yellow-200 transition duration-200 w-full"
        >
          <span className="font-semibold text-base">{skill}</span>
          <span className="text-sm text-yellow-700">{level}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Skills I Want to Learn */}
  <div className="w-full md:w-1/2 bg-white rounded-2xl p-4 shadow-lg border-t-4 border-blue-400 transition hover:shadow-xl">
    <h2 className="text-xl font-semibold text-blue-600 mb-4">🎯 Skills I Want to Learn</h2>
    <div className="flex flex-wrap gap-3">
      {Object.entries(userData.skillsLearn).map(([skill, level]) => (
        <div
          key={skill}
          className="flex justify-between items-center bg-blue-100 text-blue-800 border border-blue-300 rounded-xl px-4 py-2 hover:bg-blue-200 transition duration-200 w-full"
        >
          <span className="font-semibold text-base">{skill}</span>
          <span className="text-sm text-blue-700">{level}</span>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default OthersProfile;
