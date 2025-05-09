import React from 'react';
import { useEffect } from 'react';

const MoreCourses = () => {

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  const moreCourses = [
    {
      id: 1,
      image: '/src/User/assets/CourseIcon/machine-learning.avif',
      title: 'Machine Learning',
      description: 'Master algorithms and data-driven decision making.',
    },
    {
      id: 2,
      image: '/images/devops.jpg',
      title: 'DevOps Fundamentals',
      description: 'Automate and streamline development operations.',
    },
    {
      id: 3,
      image: '/images/cybersecurity.jpg',
      title: 'Cybersecurity Essentials',
      description: 'Protect systems against threats and vulnerabilities.',
    },
    {
      id: 4,
      image: '/images/blockchain.jpg',
      title: 'Blockchain Basics',
      description: 'Explore decentralized technology and smart contracts.',
    },
    {
      id: 5,
      image: '/images/react.jpg',
      title: 'React Development',
      description: 'Build fast and interactive front-end applications.',
    },
    {
      id: 6,
      image: '/images/data-science.jpg',
      title: 'Data Science',
      description: 'Analyze data and extract meaningful insights.',
    },
    {
      id: 7,
      image: '/images/aws.jpg',
      title: 'AWS Cloud Practitioner',
      description: 'Start your cloud journey with Amazon Web Services.',
    },
    {
      id: 8,
      image: '/images/uiux.jpg',
      title: 'UI/UX Design',
      description: 'Design intuitive and engaging user experiences.',
    },
    {
      id: 9,
      image: '/images/flutter.jpg',
      title: 'Flutter for Mobile',
      description: 'Develop cross-platform mobile apps with Flutter.',
    },
    {
      id: 10,
      image: '/images/ai.jpg',
      title: 'AI for Everyone',
      description: 'Understand artificial intelligence in simple terms.',
    },
  ];

  return (
    <div className="bg-[#F3F4F6] min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore More Tech Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-20">
        {moreCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600">{course.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreCourses;
