import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MoreCourses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const moreCourses = [
    {
      id: 1,
      image: "https://wallpaperaccess.com/full/1728953.jpg",
      title: "Machine Learning",
      description: "Master algorithms and data-driven decision making.",
    },
    {
      id: 2,
      image:
        "https://st3.depositphotos.com/1000975/35471/i/450/depositphotos_354712702-stock-photo-devops-software-development-it-concept.jpg",
      title: "DevOps Fundamentals",
      description: "Automate and streamline development operations.",
    },
    {
      id: 3,
      image: "https://www.cybercert.ca/wp-content/uploads/2021/08/map-1.jpg",
      title: "Cybersecurity Essentials",
      description: "Protect systems against threats and vulnerabilities.",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.mQgZadG_PbQJoPZIHf7mlwHaFj?cb=iwc2&rs=1&pid=ImgDetMain",
      title: "Blockchain Basics",
      description: "Explore decentralized technology and smart contracts.",
    },
    {
      id: 5,
      image: "https://reactjs.org/logo-og.png",
      title: "React Development",
      description: "Build fast and interactive front-end applications.",
    },
    {
      id: 6,
      image:
        "https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      title: "Data Science",
      description: "Analyze data and extract meaningful insights.",
    },
    {
      id: 7,
      image:
        "https://th.bing.com/th/id/OIP.kEC0kdXOK71EAQsojVZVWgAAAA?cb=iwc2&rs=1&pid=ImgDetMain",
      title: "AWS Cloud Practitioner",
      description: "Start your cloud journey with Amazon Web Services.",
    },
    {
      id: 8,
      image:
        "https://jpost.us/wp-content/uploads/2023/07/ui-design-process-steps.jpg",
      title: "UI/UX Design",
      description: "Design intuitive and engaging user experiences.",
    },
    {
      id: 9,
      image:
        "https://th.bing.com/th/id/OIP.RwYcJwNM5gF1ynHOMjCThgHaE7?cb=iwc2&rs=1&pid=ImgDetMain",
      title: "Flutter for Mobile",
      description: "Develop cross-platform mobile apps with Flutter.",
    },
    {
      id: 10,
      image: "https://i.ytimg.com/vi/SvwkWnqgeSc/maxresdefault.jpg",
      title: "AI for Everyone",
      description: "Understand artificial intelligence in simple terms.",
    },
    {
      id: 11,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      title: "C++ Programming",
      description:
        "Master the fundamentals of object-oriented programming with C++.",
    },
    {
      id: 12,
      image: "https://kanhasoft.com/blog/wp-content/uploads/2018/07/django.jpg",
      title: "Web Dev with Django",
      description:
        "Build secure and scalable web applications using Python and Django.",
    },
  ];

  const handleCourseClick = (course) => {
    navigate(`/course-match/${course.id}`, { state: course });
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen p-8">
      <div className="md:px-20 flex justify-between mb-10">
        <h2 className="text-4xl font-bold text-center text-[#161179]">
          Explore More Tech Courses
        </h2>
        <input
          type="text"
          placeholder="Search Courses..."
          className="w-full max-w-lg px-4 rounded-lg border border-[#161179] shadow-sm focus:ring-1 focus:ring-[#161179] focus:outline-none"
        />
        <div className="flex gap-1 items-center text-[#161179] font-medium ">
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
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>

          <button
            onClick={() => navigate("/")}
            className=""
          >
            Back to Explore
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-20">
        {moreCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleCourseClick(course)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2 text-center text-[#161179]">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreCourses;
