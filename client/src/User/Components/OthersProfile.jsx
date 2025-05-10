import React from 'react'
import { use } from 'react'


function OthersProfile() {
    const userData = {
        fullname: "Sathiya",
        location: "Tamilnadu, India",
        aboutMe: "I am passionate about sharing my knowledge in web development and always eager to learn new creative skills. Let's help each other grow!",
        availability: ["Evening", "Morning,Evening", "Online"],
        skillsTeaching: {
            Python: ["Intermediate"],
            React: ["Beginner"],
            Java: ["Pro"],
            HTML: ["Intermediate"]
        },
        SkillsLearning: ["Photoshop", "Illustrator", "Figma"]
    }
    return (
        <>
            <div className="min-h-screen">
                <div className="w-full max-w-4xl h-50 bg-gray-100 mx-auto py-5 border border-gray-300 rounded-lg">
                    {/* Header Section */}
                    <div className="flex items-center gap-9">
                        <img
                            src={'src/User/assets/auth.jpeg'}
                            alt="Profile"
                            className='m-11 w-32 h-32 border border-gray-600 rounded-full'
                        />
                        <div className="flex flex-col">
                            <span className='font-bold text-3xl text-gray-800'>{userData.fullname}</span>
                            <span className='text-gray-600 mt-1'>{userData.location}</span>
                        </div>
                    </div>
                    {/* Body Section */}

                    {/* Section 1 */}
                    <div className="px-8 py-3 flex gap-4">
                        <div className="w-[500px] p-3 bg-gray-200 border border-gray-300 rounded-lg shadow-lg">
                            <span className='font-bold text-gray-800'>
                                About Me</span>
                            <p className='text-justify text-gray-600'>{userData.aboutMe}</p>
                        </div>
                        <div className="w-80 p-3 flex flex-col bg-gray-200 border border-gray-300 rounded-lg shadow-lg">
                            <span className='font-bold text-heading'>
                                Availability
                            </span>
                            <div className="flex">
                                <span className='text-text'>Weekdays :  </span>
                                <p className=' text-heading'>{userData.availability[0]}</p>
                            </div>
                            <div className="flex">
                                <span className='text-text'>Weekends :  </span>
                                <p className=' text-heading'>{userData.availability[1]}</p>
                            </div>
                            <div className="flex">
                                <span className='text-text'>Preferred :  </span>
                                <p className=' text-heading'>{userData.availability[2]}</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="px-8 flex gap-4 ">
                        <div className="w-[410px] p-3 bg-gray-200 border border-gray-300 rounded-lg shadow-lg">
                            <h1 className='font-bold text-heading'>Skills I'm Teaching</h1>
                            <div >
                                <ul className="grid grid-cols-2">
                                    {
                                        Object.entries(userData.skillsTeaching).map(([skills, level]) => {
                                            return (
                                                <>
                                                <li className='text-heading'>{skills}</li>
                                                <li className='text-heading'>{level}</li>
                                                
                                                </>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="w-[410px] p-3 bg-gray-200 border border-gray-300 rounded-lg shadow-lg">
                            <h1 className='font-bold text-heading'>Skills I'm Learning</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OthersProfile