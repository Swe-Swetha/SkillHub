// import React from 'react'
// import settings from "../assets/settings.avif"
// import helpCenter from "../assets/helpCenter.avif";

// function Settings() {
//   return (
//     <>
//     <div className="">
//     <div className=" md:mx-52 border-l-4 border-l-gray-400 border-b-4 border-b-gray-400 ">
//       <div className="flex justify-center items-center gap-4">
//       <div className=""><img src={settings} width={400} /></div>
//       <div className="">
//       <h1 className="text-2xl font-bold mb-2 md:mb-2">Settings</h1>
//       <p className="text-base mb-2 md:mb-2">
//         Manage your account settings and preferences here.
//       </p>
//       <div className="md:mt-6">
//         <div className="mb-2 md:mb-6 bg-white max-w-lg rounded-lg">
//           <h2 className="text-xl font-semibold text-black mb-2">
//             Delete Account
//           </h2>
//           <p className="text-sm text-black mb-4">
//             Permanently delete your account. This action cannot be undone.
//           </p>
//           {/* <p className="text-sm text-gray-600 mb-4">
//             Note: All your data will be erased, and you will lose access to your
//             account.
//           </p> */}
//           <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">
//             Delete Account
//           </button>
//         </div>

//         <div className=" bg-white max-w-lg rounded-lg">
//           <h2 className="text-xl font-semibold text-black mb-2">
//             Deactivate Account
//           </h2>
//           <p className="text-sm text-black mb-4">
//             Temporarily deactivate your account. You can reactivate it anytime.
//           </p>
//           {/* <p className="text-sm text-gray-600 mb-4">
//             Note: Your data will remain intact, but you will not be able to use
//             your account until reactivated.
//           </p> */}
//           <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">
//             Deactivate Account
//           </button>
//         </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     <div className="p-4 md:mx-52 border-r-4 border-r-gray-400 border-b-4 border-b-gray-400 ">
//       <div className="flex justify-center gap-4">
//         <div className="">
//         <h1 className="text-2xl font-bold mb-2 md:mb-2">Help Center</h1>
//         </div>
//       <div className=""><img src={helpCenter} width={400} /></div>
//       </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Settings

import React, { useState } from 'react';
import settings from "../assets/settings.avif";
import helpCenter from "../assets/helpCenter.avif";

function Settings() {
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out!\n\nPhone: ${phone}\nProblem: ${problem}`);
    setPhone('');
    setProblem('');
  };

  return (
    <>
      <div className="">
        <div className="md:mx-52 border-l-4 border-l-gray-400 border-b-4 border-b-gray-400">
          <div className="flex justify-center items-center gap-4">
            <div className=""><img src={settings} width={400} /></div>
            <div className="">
              <h1 className="text-2xl font-bold mb-2 md:mb-2">Settings</h1>
              <p className="text-base mb-2 md:mb-2">
                Manage your account settings and preferences here.
              </p>
              <div className="md:mt-6">
                <div className="mb-2 md:mb-6 bg-white max-w-lg rounded-lg">
                  <h2 className="text-xl font-semibold text-black mb-2">
                    Delete Account
                  </h2>
                  <p className="text-sm text-black mb-4">
                    Permanently delete your account. This action cannot be undone.
                  </p>
                  <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">
                    Delete Account
                  </button>
                </div>

                <div className="bg-white max-w-lg rounded-lg">
                  <h2 className="text-xl font-semibold text-black mb-2">
                    Deactivate Account
                  </h2>
                  <p className="text-sm text-black mb-4">
                    Temporarily deactivate your account. You can reactivate it anytime.
                  </p>
                  <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Center Section */}
        <div className="p-4 md:mx-52 border-r-4 border-r-gray-400 border-b-4 border-b-gray-400">
          <div className="flex justify-center gap-4 items-center ">
            <div className='w-full max-w-md'>
              <h1 className="text-2xl font-bold ">Help Center</h1>
              <form onSubmit={handleSubmit} className="mt-2 max-w-xl mx-auto bg-white">
            <h2 className="text-xl">Need Help? Contact Us</h2>
            <div className="mb-4">
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="e.g. 9876543210"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Describe Your Problem</label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                placeholder="Explain the issue you're facing..."
                className="w-full p-2 border border-gray-300 rounded h-32"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
            </div>
            <div><img src={helpCenter} width={400} className='mx-auto' /></div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </>
  );
}

export default Settings;
