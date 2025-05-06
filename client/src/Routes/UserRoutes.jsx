import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../User/Components/Dashboard/Quiz";
import Dashboard from "../User/Components/Dashboard";



export default function UserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/quiz/:slug" element={<Quiz/>} />
                <Route path="/" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}