import React from "react";
import auth from "../assets/auth.jpeg";

function OthersProfile() {
  const userData = {
    name : "Swetha",
    location : "Puducherry, India",
    aboutMe  : "I'm a Passionate Web Developer 🚀 with high problem solving skills,looking forward to teach what I know And learn what I don't.",
    skillsTeach : {
      Python : "Intermediate",
      Java : "Beginner",
      React : "Pro",
      Love : "Very Poor" 
    },
    skillsLearn : {
      Photoshop : "Beginner",
      Illustrator : "No Exp",
      Figma : "No Exp",
      Css : "No Exp"
    }
  }



  return (
    <>
      <div className="h-screen">
        <div className="relative h-[300px] w-full bg-gradient-to-tl from-yellow-200 via-yellow-400 to-yellow-200">
          <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 z-50">
            <img
              className="w-[150px] h-[150px] rounded-full shadow-lg"
              src={auth}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="absolute top-28 bg-white w-full max-w-3xl h-[600px] shadow-xl rounded-3xl">
            
            {/* Header Section */}
            <div className="flex justify-between">
              <div className="flex p-6 cursor-pointer">
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
                <h1>Close</h1>
              </div>
              <div className="flex p-6 cursor-pointer">
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
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <h1>Connect</h1>
              </div>
            </div>

            {/* About Self */}
            <div className="flex flex-col justify-center items-center mt-10">
                  <h1 className="font-bold text-3xl">{userData.name}</h1>
                  <p className="">{userData.location}</p>
            </div>
            <div className="mx-auto mt-4 w-[700px] h-[100px] rounded-xl">
              <h1 className="font-semibold">About 😒 Me</h1>
              <p>{userData.aboutMe}</p>
            </div>
            
            {/* Skills Section */}
            <div className="flex justify-around">
              <div className="max-w-96 ml-6">
                <h1>Skills I'm Teaching</h1>
                <ul className="grid grid-cols-2 gap-6">
                  {Object.entries(userData.skillsTeach).map(([skill,level])=>{
                    return (
                      <>
                        <div className="flex flex-col">
                        <li>{skill}</li>
                        <li>{level}</li>
                        </div>
                      </>
                    )
                    
                  })}
                </ul>
              </div>

              <div className="max-w-96">
                <h1>Skills I'm Teaching</h1>
                <ul className="grid grid-cols-2 gap-6">
                  {Object.entries(userData.skillsLearn).map(([skill,level])=>{
                    return (
                      <>
                        <div className="flex flex-col">
                        <li>{skill}</li>
                        <li>{level}</li>
                        </div>
                      </>
                    )
                    
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OthersProfile;
