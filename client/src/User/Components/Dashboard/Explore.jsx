
import React from 'react';
import HomeCards from '../../Pages/HomeCards';
import explore1 from '../../assets/home1.png';
import explore2 from '../../assets/home2.png';
import card1 from "../../assets/Explore.avif";
import card2 from "../../assets/Connect.avif";
import card3 from "../../assets/ProfileSearch.png";
import star from "../../assets/star.png";
import { useNavigate } from 'react-router-dom';

function Explore() {

  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between">
          <img src={explore1} width={440} alt="Explore" />
          <div className="text-center md:text-left">
            <div className="mt-10 md:mt-32 font-semibold text-4xl">
              Collaborative Skill Sharing Hub
            </div>
            <div className="text-2xl mt-6 text-gray-500 text-center">
              Teach what you know - Learn what you love
            </div>
            <div className="flex gap-1 items-center justify-center text-gray-400 mt-6 w-full border-2 border-[#161179] rounded-md shadow-lg py-4 px-24">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input className='w-full focus:border-none focus:outline-none' placeholder='Search the course you want to explore' />
            </div>
          </div>
          <img src={explore2} width={440} alt="Explore" />
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
            <button className="text-black font-medium hover:underline" onClick={() => { navigate('/viewMoreCourse') }}>
              View More Courses
            </button>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-[#161179] h-[100px] flex items-center justify-evenly text-white text-2xl font-semibold">
          <div className="flex gap-1">
           <div className="">Rated Excellent</div> 
           <img src={star} width={30} />
           <img src={star} width={30} />
           <img src={star} width={30} />
           <img src={star} width={30} />
           <img src={star} width={30} />
            </div>
          <div className="">44 thousand+ Learners</div>
          <div className="">100+ Courses</div>
        </div>

        {/* Guidance Cards Section */}
        <div className="mt-10 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Not sure where to begin? Or even what you want to do?
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {[
              {
                img: card1,
                title: "Explore Tech Skills",
                text: "Discover in-demand skills like web development, AI, or cloud computing. Learn from real people and stay ahead in tech.",
                btn: "Explore Now"
              },
              {
                img: card2,
                title: "Collaborate with Tech Minds",
                text: "Team up with tech enthusiasts for coding projects, code reviews, or learning circles. Knowledge grows faster together.",
                btn: "Connect Now"
              },
              {
                img: card3,
                title: "Showcase Your Journey",
                text: "Earn badges and build your profile by teaching, learning, or mentoring. Highlight your tech path for future opportunities.",
                btn: "Boost Profile"
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden w-full md:w-1/3 p-4"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.text}</p>
                <button className="bg-[#161179] hover:bg-blue-950 text-white px-4 py-2 rounded-lg transition duration-200">
                  {card.btn}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-[#161179] text-white mt-16 py-8">
          {/* <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lg font-semibold">SkillHub</div>
            <div className="flex gap-6 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/viewMoreCourse" className="hover:underline">Courses</a>
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="/about" className="hover:underline">About</a>
            </div>
          </div> */}
          <div className="text-center text-sm text-gray-200 mt-4">
            &copy; {new Date().getFullYear()} Collaborative Skill Sharing Hub. All rights reserved.
          </div>
        </footer>

      </div>
    </>
  );
}

export default Explore;
