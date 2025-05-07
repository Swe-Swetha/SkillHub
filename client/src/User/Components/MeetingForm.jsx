import React, { useState } from 'react';

const MeetingForm = ({ userName, onSubmit }) => {
  const [meetLink, setMeetLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!meetLink.trim()) {
      alert("Please enter a valid Google Meet link");
      return;
    }
    onSubmit({ userName, meetLink });
    setMeetLink('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Schedule Meeting</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600">User Name</label>
          <div className="mt-1 p-4 bg-gray-100 rounded-md text-gray-800 border border-gray-300">{userName}</div>
        </div>

        <div>
          <label htmlFor="meetLink" className="block text-sm font-medium text-gray-600">
            Google Meet Link
          </label>
          <input
            id="meetLink"
            type="url"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="https://meet.google.com/abc-defg-hij"
            value={meetLink}
            onChange={(e) => setMeetLink(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all shadow-md"
        >
          Connect
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;
