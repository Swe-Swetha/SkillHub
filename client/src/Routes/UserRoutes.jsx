import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../User/Components/Dashboard/Quiz";
import Dashboard from "../User/Components/Dashboard";
import Settings from "../User/Components/Settings";
import Mentor from "../User/Components/Mentor"
import MeetingForm from "../User/Components/MeetingForm";
import MoreCourses from "../User/Components/MoreCourses";
import Login from "../User/Components/Login";
import Profile from "../User/Components/Profile";
import MyBadges from "../User/Components/MyBadges";
import OthersProfile from "../User/Components/OthersProfile";
import Courses from "../User/Components/Courses";
import Explore from "../User/Components/Dashboard/Explore";
import SkillOutbox from "../User/Components/SkillOutBox";
// import Skillbucks from "../User/Components/Dashboard/Skillbucks";



export default function UserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/quiz/:slug" element={<Quiz/>} />
                <Route path="/" element={<Dashboard/>} />
                <Route path="/loginform" element={<Login/>} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/outbox" element={<SkillOutbox />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/myBadges" element={<MyBadges />} />
                {/* <Route path="/skillbuck" element={<Skillbucks />} /> */}
                <Route path="/courses" element={<Courses />} />
                <Route path="/viewMoreCourse" element={<MoreCourses/>} />
                <Route path="/settings" element={<Settings />}/>
                <Route path="/mentor" element={<Mentor />} />
                <Route path="/meetingForm" element={<MeetingForm/>} />
                <Route path="/Others" element={<OthersProfile/>} />
            </Routes>
        </BrowserRouter>
    )
}