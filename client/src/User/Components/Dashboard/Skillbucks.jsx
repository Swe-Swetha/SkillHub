import React from "react";

const Skillbucks = ({ isOpen }) => {
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
        "Get a quick boost of Skillbucks to start learning. Perfect for discover new skills, share what you know, and grow your network.",
      action: "Buy Basic Pack",
      price: "$5",
      skillbucksAmount: "1",
      icon: "/src/User/assets/LessCoins.png",
    },
    {
      id: 3,
      title: "Premium Skillbucks Bundle",
      description:
        "Maximize your learning potential with a large Skillbucks bundle. Unlock advanced courses and mentorship.",
      action: "Buy Premium Bundle",
      price: "$20",
      skillbucksAmount: "2",
      icon: "/src/User/assets/MoreCoins.png",
    },
  ];

  return (
    <div className="relative p-6 container mx-auto mt-8 bg-white rounded-2xl shadow-lg">
      {/* Close button */}
      <button
        onClick={() => isOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors duration-200"
      >
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
      </button>

      <h2 className="text-3xl font-bold text-center text-secondary mb-2">
        Get Skillbucks
      </h2>
      <p className="text-gray-600 text-center mb-4">
        Use Skillbucks to learn new skills from other users on SkillHub. Choose
        a plan that suits you best!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
        {skillbucksPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden border flex flex-col justify-between"
          >
            <div className="p-6 text-center">
              {plan.icon && (
                <img
                  src={plan.icon}
                  alt={plan.title}
                  className="mx-auto h-16 mb-4"
                />
              )}

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>

              <div className="">
                <span className="text-xl font-bold text-secondary">
                  {plan.price}
                </span>
                <span className="text-gray-700 block mt-1">
                  Get {plan.skillbucksAmount} Skillbucks
                </span>
              </div>
            </div>

            <div className="bg-secondary text-center py-3 mb-6">
              <button className="text-white font-semibold py-2 px-6 bg-green-500 hover:bg-secondary rounded-full transition-all duration-200">
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
