import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Quiz from './Dashboard/Quiz';

const EarnBadgePage = () => {
      const navigate = useNavigate();

      const courses = [
        { id: 1, name: 'React', slug: 'react', color: 'bg-blue-100' },
        { id: 2, name: 'Python', slug: 'python', color: 'bg-yellow-100' },
        { id: 3, name: 'JavaScript', slug: 'javascript', color: 'bg-green-100' },
        { id: 4, name: 'UI/UX', slug: 'ui-ux', color: 'bg-pink-100' },
    ];
    

    const handleCourseClick = (slug) => {
        navigate(`/quiz/${slug}`);
        console.log("HELLO")
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Earn Your Badge</h1>
            <p className="mb-4 text-gray-600">Select a course and pass the quiz to earn your badge!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className={`cursor-pointer p-6 rounded-lg shadow hover:shadow-lg transition ${course.color}`}
                        onClick={() => handleCourseClick(course.slug)}
                    >
                        <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
                        <p className="text-sm text-gray-600 mt-2">Click to start the quiz</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EarnBadgePage;
