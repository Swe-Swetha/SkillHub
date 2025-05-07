import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Quiz from './Dashboard/Quiz';

const EarnBadgePage = () => {
      const navigate = useNavigate();

      const courses = [
        { id: 1, name: 'React', slug: 'react', iconImage : "src/User/assets/CourseIcon/react.png" },
        { id: 2, name: 'Python', slug: 'python', iconImage :"src/User/assets/CourseIcon/python.png"},
        { id: 3, name: 'JavaScript', slug: 'javascript',},
        { id: 4, name: 'UI/UX', slug: 'ui-ux', },
    ];
    

    const handleCourseClick = (slug) => {
        navigate(`/quiz/${slug}`);
        console.log("HELLO")
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Earn Your Badge</h1>
            <p className="mb-4 text-gray-600">Select a course and pass the quiz to earn your badge!</p>

            <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Search "
        />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="cursor-pointer p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-100"
                        onClick={() => handleCourseClick(course.slug)}
                    >
                        <div className="flex gap-2 items-center">
                        <img src={course.iconImage} className='w-10 h-10'/>
                        <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2></div>
                                                
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EarnBadgePage;
