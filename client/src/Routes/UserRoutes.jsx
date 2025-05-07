import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../User/Components/Dashboard/Quiz";
import Dashboard from "../User/Components/Dashboard";
import Settings from "../User/Components/Settings";
import Mentor from "../User/Components/Mentor"
import MeetingForm from "../User/Components/MeetingForm";



export default function UserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/quiz/:slug" element={<Quiz/>} />
                <Route path="/" element={<Dashboard/>} />
                <Route path="/settings" element={<Settings />}/>
                <Route path="/mentor" element={<Mentor />} />
                <Route path="/meetingForm" element={<MeetingForm/>} />
            </Routes>
        </BrowserRouter>
    )
}