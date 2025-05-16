import React from 'react';
import { useNavigate } from 'react-router-dom';
// import badge1 from "../../assets/badge1.png";
// import badge2 from "../../assets/badge2.png";
// import badge3 from "../../assets/badge3.png";

const EarnBadgePage = () => {
    const navigate = useNavigate();

    const courses = [
        { id: 1, name: 'React', slug: 'react', iconImage: "src/User/assets/CourseIconWhite/react.png" },
        { id: 2, name: 'Python', slug: 'python', iconImage: "src/User/assets/CourseIconWhite/python.png"},
        { id: 3, name: 'JavaScript', slug: 'javascript' },
        { id: 4, name: 'UI/UX', slug: 'ui-ux' },
        { id: 5, name: 'Node.js', slug: 'node-js' }, 
        { id: 6, name: 'Java', slug: 'java' }, 
        { id: 7, name: 'My Sql', slug: 'sql' }, 
        { id: 8, name: 'Angular', slug: 'angular' }, 
        { id: 9, name: 'Django', slug: 'django' }, 
        { id: 10, name: 'Flask', slug: 'flask' }, 
        { id: 11, name: 'MongoDB', slug: 'mongodb' }, 
        { id: 12, name: 'Vue', slug: 'vue' }, 
    ];

    const bgColors = [
        'bg-blue-400',
        'bg-red-400',
        'bg-green-400',
        'bg-yellow-400',
        'bg-purple-400',
        'bg-teal-400',
        'bg-pink-400',
        'bg-indigo-400',
        'bg-[#D17D98]',
        'bg-[#3A7D44]',
        'bg-[#BDB395]',
        'bg-[#D50B8B]'
    ];

    const handleCourseClick = (slug) => {
        navigate(`/quiz/${slug}`);
        console.log("HELLO");
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
                        <div className="flex">

            <h1 className="text-3xl font-bold pr-4">Earn Your Badge</h1>
            {/* <img src={badge1} className='w-12 h-12'/>
            <img src={badge2} className='w-12 h-12'/>
            <img src={badge3} className='w-12 h-12'/> */}
            </div>
            <p className="mb-4 text-gray-600">Select a course and pass the quiz to earn your badge!</p>

            <input
                type="text"
                className="w-full p-3 border border-gray-400 rounded-lg mb-8 focus:outline-none focus:ring-1 focus:ring-blue-900"
                placeholder="Search"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                    <div
                        key={course.id}
                        className={`cursor-pointer p-6 rounded-lg shadow hover:shadow-lg transition min-h-[130px] text-white ${bgColors[index % bgColors.length]}`}
                        onClick={() => handleCourseClick(course.slug)}
                    >
                        <div className="flex flex-col items-center justify-center mt-6">
                            {/* {course.iconImage && (
                                <img src={course.iconImage} alt={course.name} className="w-12 h-12 mb-3" />
                            )} */}
                            <h2 className="text-xl font-semibold">{course.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EarnBadgePage;
