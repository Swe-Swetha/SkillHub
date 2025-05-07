import React from 'react';
import HomeCards from '../../Pages/HomeCards';
import explore from '../../assets/HomeImage.avif';

// Functional card data model (button text added)
const GuidanceCards = [
  {
    id: 1,
    image: "src/User/assets/Explore.avif",
    title: 'Explore Tech Skills',
    description: 'Discover in-demand skills like web development, AI, or cloud computing. Learn from real people and stay ahead in tech.',
    buttonText: 'Explore Now',
  },
  {
    id: 2,
    image: "src/User/assets/Connect.avif",
    title: 'Collaborate with Tech Minds',
    description: "Team up with tech enthusiasts for coding projects, code reviews, or learning circles. Knowledge grows faster together.",
    buttonText: 'Connect Now',
  },
  {
    id: 3,
    image: "src/User/assets/Profile.avif",
    title: 'Showcase Your Journey',
    description: "Earn badges and build your profile by teaching, learning, or mentoring. Highlight your tech path for future opportunities.",
    buttonText: 'Boost Profile',
  },
];

function Explore() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row p-6 justify-center">
          <img src={explore} width={650} alt="Explore" />
          <div className="text-center md:text-left md:ml-10">
            <div className="mt-10 md:mt-32 font-semibold text-4xl">
              Collaborative Skill Sharing Hub
            </div>
            <div className="text-2xl mt-6 text-gray-500 text-center">
              Teach what you know - Learn what you love
            </div>
          </div>
        </div>

        {/* Explore Courses Section */}
        <div className="bg-[#7BD3EA]">
          <h2 className="text-4xl font-bold text-center py-6">
            Explore Courses on your Choice
          </h2>
          <div className="grid grid-rows-2 grid-cols-5 gap-8 bg-secondary px-48">
            {HomeCards.map((item) => (
              <div
                key={item.id}
                className="bg-white flex flex-col justify-center items-center p-4 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="w-[100px] h-[100px]">
                  <img src={item.imgico} alt={item.course} />
                </div>
                <div className="text-lg font-semibold mt-2">{item.course}</div>
                <div className="text-gray-600">{item.members} Teaching</div>
              </div>
            ))}
          </div>
          <div className="flex justify-end px-48 py-6">
              <button className=" text-black font-medium hover:underline">
                View More Courses
              </button>
              </div>
        </div>

        {/* Guidance Cards Section */}
        <div className="bg-white py-16 px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Not sure where to begin? Or even what you want to do?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {GuidanceCards.map((card) => (
              <div
                key={card.id}
                className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center bg-gray-100"
              >
                
                <img
                  src={card.image}
                  alt={card.title}
                  className=""
                />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg mb-2">
                  {card.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
