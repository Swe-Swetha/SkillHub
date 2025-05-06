// import React from 'react';

// const Skillbucks = ({ isOpen }) => {

//     let close = false;
//     const skillbucksPlans = [
//         {
//             id: 1,
//             title: 'Earn Free Skillbucks',
//             description: 'Share your knowledge and teach skills to earn Skillbucks. The more you teach, the more you earn!',
//             action: 'Start Teaching',
//             price: 'Free',
//             skillbucksAmount: 'Free',
//             icon: '/src/User/assets/Skill.png'
//         },
//         {
//             id: 2,
//             title: 'Basic Skillbucks Pack',
//             description: 'Get a quick boost of Skillbucks to start learning. Perfect for exploring new skills.',
//             action: 'Buy Basic Pack',
//             price: '$5',
//             skillbucksAmount: '1',
//             icon: '/src/User/assets/LessCoins.png'
//         },
//         {
//             id: 3,
//             title: 'Premium Skillbucks Bundle',
//             description: 'Maximize your learning potential with a large Skillbucks bundle. Unlock advanced courses and mentorship.',
//             action: 'Buy Premium Bundle',
//             price: '$20',
//             skillbucksAmount: '2',
//             icon: '/src/User/assets/MoreCoins.png'
//         }
//     ];


//     return (
//         <div className="relative p-6 container mx-auto mt-8 bg-white rounded-2xl shadow-lg">
//             {/* Cancel button at top right */}
//             <button
//                 onClick={() => isOpen(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
//             >
//                 ✕
//             </button>

//             <h2 className="text-3xl font-bold text-center text-secondary mb-2">Get Skillbucks</h2>
//             <p className="text-gray-600 text-center mb-8">
//                 Use Skillbucks to learn new skills from other users on SkillHub. Choose a plan that suits you best!
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {skillbucksPlans.map((plan) => (
//                     <div
//                         key={plan.id}
//                         className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden border"
//                     >
//                         <div className="p-6 text-center">
//                             {plan.icon && (
//                                 <img
//                                     src={plan.icon}
//                                     alt={plan.title}
//                                     className="mx-auto h-16 mb-4"
//                                 />
//                             )}

//                             {plan.price !== 'Free' && (
//                                 <div className="mb-2">
//                                     <span className="text-xl font-bold text-secondary">{plan.price}</span>
//                                     {plan.skillbucksAmount && (
//                                         <span className="text-gray-700 block mt-1">
//                                             Get {plan.skillbucksAmount} Skillbucks
//                                         </span>
//                                     )}
//                                 </div>
//                             )}

//                             <h3 className="text-lg font-semibold text-gray-800 mb-2">{plan.title}</h3>
//                             <p className="text-gray-600 mb-4">{plan.description}</p>
//                         </div>
//                         <div className="bg-secondary text-center py-3">
//                             <button className="text-white font-semibold py-2 px-6 bg-primary hover:bg-secondary rounded-full transition-all duration-200">
//                                 {plan.action}
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Skillbucks;
import React from 'react';

const Skillbucks = ({ isOpen }) => {
    const skillbucksPlans = [
        {
            id: 1,
            title: 'Earn Free Skillbucks',
            description: 'Share your knowledge and teach skills to earn Skillbucks. The more you teach, the more you earn!',
            action: 'Start Teaching',
            price: 'Free',
            skillbucksAmount: 'Free',
            icon: '/src/User/assets/Skill.png'
        },
        {
            id: 2,
            title: 'Basic Skillbucks Pack',
            description: 'Get a quick boost of Skillbucks to start learning. Perfect for exploring new skills.',
            action: 'Buy Basic Pack',
            price: '$5',
            skillbucksAmount: '1',
            icon: '/src/User/assets/LessCoins.png'
        },
        {
            id: 3,
            title: 'Premium Skillbucks Bundle',
            description: 'Maximize your learning potential with a large Skillbucks bundle. Unlock advanced courses and mentorship.',
            action: 'Buy Premium Bundle',
            price: '$20',
            skillbucksAmount: '2',
            icon: '/src/User/assets/MoreCoins.png'
        }
    ];

    return (
        <div className="relative p-6 container mx-auto mt-8 bg-white rounded-2xl shadow-lg">
            {/* Close button */}
            <button
                onClick={() => isOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
                ✕
            </button>

            <h2 className="text-3xl font-bold text-center text-secondary mb-2">Get Skillbucks</h2>
            <p className="text-gray-600 text-center mb-8">
                Use Skillbucks to learn new skills from other users on SkillHub. Choose a plan that suits you best!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillbucksPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden border flex flex-col justify-between"
                    >
                        <div className="p-6 text-center">
                            {plan.icon && (
                                <img
                                    src={plan.icon}
                                    alt={plan.title}
                                    className="mx-auto h-16 mb-4"
                                />
                            )}

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{plan.title}</h3>
                            <p className="text-gray-600 mb-4">{plan.description}</p>

                            <div className="mb-4">
                                <span className="text-xl font-bold text-secondary">
                                    {plan.price}
                                </span>
                                {plan.skillbucksAmount && plan.price !== 'Free' && (
                                    <span className="text-gray-700 block mt-1">
                                        Get {plan.skillbucksAmount} Skillbucks for  {plan.price}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="bg-secondary text-center py-3">
                            <button className="text-white font-semibold py-2 px-6 bg-green-500 hover:bg-secondary rounded-full transition-all duration-200">
                                {plan.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skillbucks;
