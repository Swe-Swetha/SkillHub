import React from 'react';
import HomeCards from '../../Pages/HomeCards';
import explore from '../../assets/HomeImage.avif';

// Functional card data model
const GuidanceCards = [
  {
    id: 1,
    title: 'Discover Interests',
    description: 'Explore categories and take mini quizzes to find what excites you the most.',
    bgColor: 'bg-[#F0F9FF]',
    textColor: 'text-blue-600',
  },
  {
    id: 2,
    title: 'Get Recommendations',
    description: 'Based on your interests, we’ll suggest trending or high-rated courses and mentors.',
    bgColor: 'bg-[#FEF9E7]',
    textColor: 'text-yellow-600',
  },
  {
    id: 3,
    title: 'Start Small',
    description: 'Try out quick 30-minute intro lessons to test your comfort with different skills.',
    bgColor: 'bg-[#FDF2F8]',
    textColor: 'text-pink-600',
  },
];

function Explore() {
  return (
    <>
      <div className="">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row p-6 justify-center items-center">
          <img src={explore} width={650} alt="Explore" />
          <div className="text-center md:text-left md:ml-10">
            <div className="mt-10 md:mt-32 font-semibold text-4xl">
              Collaborative Skill Sharing Hub
            </div>
            <div className="text-2xl mt-6 text-gray-500">
              Teach what you know - Learn what you love
            </div>
          </div>
        </div>

        {/* Explore Courses Section */}
        <div className="bg-[#7BD3EA]">
          <h2 className="text-4xl font-bold text-center pt-6">
            Explore Courses on your Choice
          </h2>
          <div className="grid grid-rows-2 grid-cols-5 gap-8 bg-secondary px-48 py-10">
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
                className={`${card.bgColor} p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${card.textColor}`}>{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
