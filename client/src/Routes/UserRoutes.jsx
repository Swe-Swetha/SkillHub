import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../User/Components/Dashboard/Quiz";
import Dashboard from "../User/Components/Dashboard";
import Settings from "../User/Components/Settings";
import MoreCourses from "../User/Components/MoreCourses";
import Login from "../User/Components/Login";
import Profile from "../User/Components/Profile";
import MyBadges from "../User/Components/MyBadges";
import OthersProfile from "../User/Components/OthersProfile";
import Courses from "../User/Components/Courses";
import Explore from "../User/Components/Dashboard/Explore";
import Skillbucks from "../User/Components/Dashboard/Skillbucks";
import ScheduleMeetingForm from "../User/Components/ScheduleMeetingForm";
import MentorshipRequests from "../User/Components/MentorshipRequest";
import TeachingDashboard from "../User/Components/TeachingDashboard";
import LearningDashboard from "../User/Components/LearningDashboard";

export default function UserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/schedule" element={<ScheduleMeetingForm />} />
        <Route path="/mentorReq" element={<MentorshipRequests />} />
        <Route path="/quiz/:slug" element={<Quiz />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/loginform" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myBadges" element={<MyBadges />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/viewMoreCourse" element={<MoreCourses />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Others" element={<OthersProfile />} />
        <Route path="/teaching" element={<TeachingDashboard />} />
        <Route path="/learn" element={<LearningDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
