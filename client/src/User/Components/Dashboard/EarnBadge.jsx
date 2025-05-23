// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const EarnBadgePage = () => {
//     const navigate = useNavigate();

//     const courses = [
//         { id: 1, name: 'React', slug: 'react', },
//         { id: 2, name: 'Python', slug: 'python',},
//         { id: 3, name: 'JavaScript', slug: 'javascript' },
//         { id: 4, name: 'UI/UX', slug: 'ui-ux' },
//         { id: 5, name: 'Node.js', slug: 'node-js' }, 
//         { id: 6, name: 'Java', slug: 'java' }, 
//         { id: 7, name: 'My Sql', slug: 'sql' }, 
//         { id: 8, name: 'Angular', slug: 'angular' }, 
//         { id: 9, name: 'Django', slug: 'django' }, 
//         { id: 10, name: 'Flask', slug: 'flask' }, 
//         { id: 11, name: 'MongoDB', slug: 'mongodb' }, 
//         { id: 12, name: 'Vue', slug: 'vue' }, 
//     ];

//     const bgColors = [
//         'bg-blue-400',
//         'bg-red-400',
//         'bg-green-400',
//         'bg-yellow-400',
//         'bg-purple-400',
//         'bg-teal-400',
//         'bg-pink-400',
//         'bg-indigo-400',
//         'bg-[#D17D98]',
//         'bg-[#3A7D44]',
//         'bg-[#BDB395]',
//         'bg-[#D50B8B]'
//     ];

//     const handleCourseClick = (slug) => {
//         navigate(`/quiz/${slug}`);
//         console.log("HELLO");
//     };

//     return (
//         <div className="p-6 max-w-5xl mx-auto">
//                         <div className="flex">

//             <h1 className="text-3xl font-bold pr-4">Earn Your Badge</h1>
//             </div>
//             <p className="mb-4 text-gray-600">Select a course and pass the quiz to earn your badge!</p>

//             <input
//                 type="text"
//                 className="w-full p-3 border border-gray-400 rounded-lg mb-8 focus:outline-none focus:ring-1 focus:ring-blue-900"
//                 placeholder="Search"
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                 {courses.map((course, index) => (
//                     <div
//                         key={course.id}
//                         className={`cursor-pointer p-6 rounded-lg shadow hover:shadow-lg transition min-h-[130px] text-white ${bgColors[index % bgColors.length]}`}
//                         onClick={() => handleCourseClick(course.slug)}
//                     >
//                         <div className="flex flex-col items-center justify-center mt-6">
//                             {/* {course.iconImage && (
//                                 <img src={course.iconImage} alt={course.name} className="w-12 h-12 mb-3" />
//                             )} */}
//                             <h2 className="text-xl font-semibold">{course.name}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default EarnBadgePage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EarnBadgePage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const courses = [
        { id: 1, name: 'React', slug: 'react' },
        { id: 2, name: 'Python', slug: 'python' },
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
        'bg-gradient-to-br from-blue-500 to-blue-700',
        'bg-gradient-to-br from-red-500 to-red-700',
        'bg-gradient-to-br from-green-500 to-green-700',
        'bg-gradient-to-br from-yellow-400 to-yellow-600',
        'bg-gradient-to-br from-purple-500 to-purple-700',
        'bg-gradient-to-br from-teal-500 to-teal-700',
        'bg-gradient-to-br from-pink-500 to-pink-700',
        'bg-gradient-to-br from-indigo-500 to-indigo-700',
        'bg-gradient-to-br from-[#D17D98] to-[#B14D6A]',
        'bg-gradient-to-br from-[#3A7D44] to-[#285833]',
        'bg-gradient-to-br from-[#BDB395] to-[#9C927B]',
        'bg-gradient-to-br from-[#D50B8B] to-[#A00768]'
    ];

    const handleCourseClick = (slug) => {
        navigate(`/quiz/${slug}`);
    };

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="text-center mb-4">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Earn Your Badge</h1>
                <p className="text-lg text-gray-600">Select a course and pass the quiz to earn a badge!</p>
            </div>

            <div className="mb-8">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-900 shadow"
                    placeholder="Search for a course..."
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course, index) => (
                    <div
                        key={course.id}
                        onClick={() => handleCourseClick(course.slug)}
                        className={`cursor-pointer rounded-2xl text-white p-6 min-h-[150px] flex flex-col justify-between shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-300 ${bgColors[index % bgColors.length]}`}
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <h2 className="text-2xl font-bold text-center mt-6">{course.name}</h2>
                        </div>
                        <p className="text-sm font-medium text-white/90 text-center mt-4">
                            Click to attend the quiz <span className="text-lg">→</span>
                        </p>
                    </div>
                ))}
            </div>

            {filteredCourses.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No courses match your search.</p>
            )}
        </div>
    );
};

export default EarnBadgePage;
