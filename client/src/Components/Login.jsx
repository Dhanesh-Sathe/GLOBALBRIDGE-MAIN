import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/Home.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", loginData);
      const getUser = await axios.get(`http://localhost:8000/api/verify-otp/${loginData.email}`);
      
      const userData = {
        username: getUser.data.user.username,
        email: getUser.data.user.email,
      };
      setUser(userData);
      
      if (response.data.success) {
        toast.success("Login successful!");
        navigate("/home");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Login failed. Please try again.");
    }
    setLoginData({ email: "", password: "" });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-xl w-full max-w-md"
      >
        <div className="text-center">
          <motion.img 
            src="./images/logo-removebg-preview.png" 
            alt="Logo" 
            className="h-16 mx-auto mb-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <h2 className="text-3xl font-bold text-white">GlobalBridge</h2>
        </div>

        <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-white">Email</label>
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="email" 
              name="email" 
              value={loginData.email} 
              onChange={handleLoginChange} 
              className="w-full p-2 mt-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500" 
              required
            />
          </div>
          <div>
            <label className="text-white">Password</label>
            <motion.input 
              whileFocus={{ scale: 1.05 }}
              type="password" 
              name="password" 
              value={loginData.password} 
              onChange={handleLoginChange} 
              className="w-full p-2 mt-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500" 
              required
            />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300"
            type="submit"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-white mt-4">
          Don't have an account? <a href="/signup" className="underline font-semibold">Sign Up</a>
        </p>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Login;