import React, { useState } from 'react';

const ScheduleMeetingForm = () => {
  const [meetingType, setMeetingType] = useState('Video Call');

  return (
    <>
    <div className="max-w-3xl mx-auto bg-white mt-6 flex flex-col items-end mb-4">
         <button
    className="flex gap-1 items-center bg-white text-violet-600 font-semibold px-4 py-2 rounded-md hover:underline transition"
    onClick={() => window.location.href = '/'} // You can replace with navigate('/') if using React Router
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

    Back to Home
  </button></div>
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-4 border">       
      <div className="bg-violet-600 text-white rounded-t-md px-6 py-6 mb-6">
        <h2 className="text-xl font-bold">Schedule a Meeting</h2>
        <p className="">Connect with others and schedule a mentorship session</p>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Who would you like to meet with?</label>
        <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg">
          <img src="https://i.pravatar.cc/50?img=3" alt="mentor" className="rounded-full w-10 h-10" />
          <div>
            <div className="font-medium">Jane Smith</div>
            <div className="text-gray-500">Python, Data Science, Machine Learning</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">What would you like to discuss?</label>
        <input
          type="text"
          placeholder="E.g., JavaScript Basics, UI Design Principles"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-violet-500"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Preferred Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-violet-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Preferred Time</label>
          <input
            type="time"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-violet-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Meeting Type</label>
        <div className="flex gap-4">
          <button
            className={`flex-1 px-4 py-2 rounded-md border ${
              meetingType === 'Video Call'
                ? 'bg-violet-100 border-violet-500 text-violet-600'
                : 'border-gray-300 text-gray-700'
            }`}
            onClick={() => setMeetingType('Video Call')}
          >
            Video Call
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-md border ${
              meetingType === 'Chat Session'
                ? 'bg-violet-100 border-violet-500 text-violet-600'
                : 'border-gray-300 text-gray-700'
            }`}
            onClick={() => setMeetingType('Chat Session')}
          >
            Chat Session
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Additional Details</label>
        <textarea
          rows="3"
          placeholder="Share what you're hoping to learn or discuss in this meeting..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-violet-500"
        ></textarea>
      </div>

      <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-md transition">
        Send Meeting Request
      </button>
    </div>
    </>
  );
};

export default ScheduleMeetingForm;
