import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import auth from "../assets/auth.jpeg";

function Login() {
    // const [formData, setFormData] = useState({ email: '', password: '' });
    // const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("login");


    let formContent;
    switch (activeTab) {
        case "login":
            formContent = (
                <form className='mx-8 '>
                    <input className='block w-full bg-gray-100 rounded-lg px-2 py-3 my-4 focus:outline-none focus:ring-0' type="email" placeholder='Email' required />
                    <input className='block w-full bg-gray-100 rounded-lg px-2 py-3 my-4 focus:outline-none focus:ring-0' type="password" placeholder='Password' required />
                    <button className='w-full bg-green-600 text-white rounded-lg py-3 my-2 text-center text-lg font-semibold' >Log In</button>
                </form>);
            break;
        case "signup":
            formContent = (
                <form className='mx-8 '>
                    <div className="flex gap-4">
                        <input type="text" placeholder='First Name' className='inline w-full bg-gray-100 rounded-lg px-2 py-3 my-2 focus:outline-none focus:ring-0' />
                        <input type="text" placeholder='Last Name' className='inline w-full bg-gray-100 rounded-lg px-2 py-3 my-2 focus:outline-none focus:ring-0' /></div>
                    <input className=' w-full bg-gray-100 rounded-lg px-2 py-3 my-2 focus:outline-none focus:ring-0' type="email" placeholder='Email' required />
                    <input className=' w-full bg-gray-100 rounded-lg px-2 py-3 my-2 focus:outline-none focus:ring-0' type="password" placeholder='Password' required />
                    <button className='w-full bg-green-600 text-white rounded-lg py-3 my-2 text-center text-lg font-semibold' >Sign Up</button>
                </form>);
            break;
    }
    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };


    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const res = await axios.post('/auth/login', formData);
    //       localStorage.setItem('token', res.data.token);
    //       navigate('/dashboard');
    //     } catch (err) {
    //       alert(err.response?.data?.message || 'Login failed');
    //     }
    //   };

    return (
        <>
            <div className="min-h-screen flex flex-cols justify-center items-center bg-black bg-opacity-50">
                <div className="flex justify-evenly items-center w-full max-w-4xl h-[500px] bg-white rounded-2xl">
                    <div className="flex flex-col justify-center items-center px-4 bg-green-100 min-h-full rounded-s-2xl">
                        <img className='mb-4' src={auth} width={300} />
                        <span className='text-2xl font-semibold'>Empower Through Exchange</span>
                        <p className='text-center max-w-xl'>Teach what you know, learn what you love, and grow together
                            with personalized matching, verified profiles, and zero cost.</p>
                    </div>
                    <div className="w-full max-w-md h-full flex flex-col">
                        <div className="flex gap-6 text-xl font-semibold justify-center m-4 mb-4  py-4">
                            <button className={`${activeTab == "login" ? "text-green-600 underline underline-offset-8" : ""}`} onClick={() => setActiveTab("login")}>Log In</button>
                            <button className={`${activeTab == "signup" ? "text-green-600 underline underline-offset-8" : ""}`} onClick={() => setActiveTab("signup")}>Sign Up</button>
                        </div>
                        {formContent}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login