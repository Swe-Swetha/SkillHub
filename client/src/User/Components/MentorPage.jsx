import React from 'react';
import MeetingForm from './MeetingForm';

const MentorPage = () => {
  const handleMeetingSubmit = ({ userName, meetLink }) => {
    console.log("Meeting Link Submitted:", userName, meetLink);
    // You can send this to your backend or WebSocket logic
  };

  return (
    <div className="p-8">
      <MeetingForm userName="JohnDoe123" onSubmit={handleMeetingSubmit} />
    </div>
  );
};

export default MentorPage;
