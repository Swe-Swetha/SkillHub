
// import React from "react";
// import skillbuck from "../../assets/skillbuck.png"

// const Skillbucks = ({ currentSkillbucks = 425 }) => {
//   const skillbucksPlans = [
//     {
//       id: 1,
//       title: "Earn Free Skillbucks",
//       description:
//         "Share your knowledge and teach skills to earn Skillbucks. The more you teach, the more you earn!",
//       action: "Start Teaching",
//       price: "Free",
//       skillbucksAmount: "Free",
//       icon: "/src/User/assets/Skill.png",
//     },
//     {
//       id: 2,
//       title: "Basic Skillbucks Pack",
//       description:
//         "Get a quick boost of Skillbucks to start learning. Perfect for discovering new skills, sharing what you know, and growing your network.",
//       action: "Buy Basic Pack",
//       price: "$5",
//       skillbucksAmount: "50",
//       icon: "/src/User/assets/LessCoins.png",
//     },
//     {
//       id: 3,
//       title: "Premium Skillbucks Bundle",
//       description:
//         "Maximize your learning potential with a large Skillbucks bundle. Unlock advanced courses and mentorship.",
//       action: "Buy Premium Bundle",
//       price: "$20",
//       skillbucksAmount: "400",
//       icon: "/src/User/assets/MoreCoins.png",
//     },
//   ];

//   return (
//     <div className="p-6 container mx-auto mt-8">
//       {/* Header Section */}
      
//       <div className="h-[150px] bg-[#161179] mb-10 rounded-xl shadow-xl text-white px-4">
// <div className="flex justify-between items-center">
//         <div className="flex items-center gap-6">
//         <img src={skillbuck} width={80} className="rounded-full" />
//         <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Skillbuck Balance</h2></div>
//         <div className="bg-white text-[#161179] font-bold text-2xl px-6 py-2 rounded-full shadow-md">
//           {currentSkillbucks} Skillbucks
//         </div></div>
//       </div>

//       {/* Info Section */}
//       <h2 className="text-3xl font-bold text-center text-[#161179] mb-2">
//         Get More Skillbucks
//       </h2>
//       <p className="text-gray-600 text-center mb-8">
//         Choose a plan that suits you. Skillbucks let you unlock courses, connect with mentors, and grow faster.
//       </p>

//       {/* Plans Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {skillbucksPlans.map((plan) => (
//           <div
//             key={plan.id}
//             className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between"
//           >
//             <div className="p-6 text-center">
//               {plan.icon && (
//                 <img
//                   src={plan.icon}
//                   alt={plan.title}
//                   className="mx-auto h-16 mb-4"
//                 />
//               )}

//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {plan.title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

//               <div>
//                 <span className="text-xl font-bold text-[#161179]">{plan.price}</span>
//                 <div className="text-sm text-gray-700 mt-1">
//                   Get {plan.skillbucksAmount} Skillbucks
//                 </div>
//               </div>
//             </div>

//             <div className="px-6 pb-6">
//               <button className="w-full bg-[#161179] text-white font-semibold py-2 rounded-full hover:bg-[#161179] transition duration-200">
//                 {plan.action}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skillbucks;
import React from "react";
import skillbuck from "../../assets/skillbuck.png";

const Skillbucks = ({ currentSkillbucks = 425 }) => {
  const skillbucksPlans = [
    {
      id: 1,
      title: "Earn Free Skillbucks",
      description:
        "Share your knowledge and teach skills to earn Skillbucks. The more you teach, the more you earn!",
      action: "Start Teaching",
      price: "Free",
      skillbucksAmount: "Free",
      icon: "/src/User/assets/Skill.png",
    },
    {
      id: 2,
      title: "Basic Skillbucks Pack",
      description:
        "Get a quick boost of Skillbucks to start learning. Perfect for discovering new skills, sharing what you know, and growing your network.",
      action: "Buy Basic Pack",
      price: "$5",
      skillbucksAmount: "50",
      icon: "/src/User/assets/LessCoins.png",
    },
    {
      id: 3,
      title: "Premium Skillbucks Bundle",
      description:
        "Maximize your learning potential with a large Skillbucks bundle. Unlock advanced courses and mentorship.",
      action: "Buy Premium Bundle",
      price: "$20",
      skillbucksAmount: "400",
      icon: "/src/User/assets/MoreCoins.png",
    },
  ];

  return (
    <div className="p-6 container mx-auto mt-6 max-w-screen-xl">
      {/* Header Section */}
      <div className="h-[160px] bg-[#161179] mb-8 rounded-2xl shadow-lg text-white px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={skillbuck} width={70} className="rounded-full drop-shadow" />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Your Skillbuck Balance</h2>
            <p className="text-sm text-white/80 mt-1">
              Earn or purchase Skillbucks to unlock new learning opportunities.
            </p>
          </div>
        </div>
        <div className="bg-white text-[#161179] font-bold text-2xl px-6 py-2 rounded-full shadow-md">
          {currentSkillbucks} SB
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-[#161179] mb-2">
        Get More Skillbucks
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Choose a plan that suits you best. Use Skillbucks to enroll in courses, book sessions, and access premium learning resources on SkillHub.
      </p>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillbucksPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div className="p-6 text-center">
              {plan.icon && (
                <img
                  src={plan.icon}
                  alt={plan.title}
                  className="mx-auto h-16 mb-4 drop-shadow"
                />
              )}

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 min-h-[72px]">
                {plan.description}
              </p>

              <div className="mb-4">
                <span className="text-xl font-bold text-[#161179]">{plan.price}</span>
                <div className="text-sm text-gray-700 mt-1">
                  Get <strong>{plan.skillbucksAmount}</strong> Skillbucks
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button className="w-full bg-[#161179] text-white font-medium py-2 rounded-full hover:bg-indigo-900 transition duration-200">
                {plan.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillbucks;
