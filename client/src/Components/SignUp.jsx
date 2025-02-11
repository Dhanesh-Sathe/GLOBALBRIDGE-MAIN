import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://globalbridge-server.onrender.com/api/sign-up', signUpData);
      if (response.data.success) {
        toast.success('OTP Sent Successfully!');
        localStorage.setItem('email', signUpData.email);
        setTimeout(() => navigate('/otpverification'), 1500);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error('Error sending OTP');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600'>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className='bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md text-center'>
        
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Create Account</h2>
        <p className='text-gray-600 mb-6'>Join GlobalBridge and start your journey!</p>
        
        <form onSubmit={handleSendOtp} className='space-y-4'>
          <motion.input 
            whileFocus={{ scale: 1.05 }}
            type='text' 
            name='username' 
            placeholder='Username' 
            value={signUpData.username} 
            onChange={handleSignUpChange} 
            className='w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500' required />
          
          <motion.input 
            whileFocus={{ scale: 1.05 }}
            type='email' 
            name='email' 
            placeholder='Email' 
            value={signUpData.email} 
            onChange={handleSignUpChange} 
            className='w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500' required />
          
          <motion.input 
            whileFocus={{ scale: 1.05 }}
            type='password' 
            name='password' 
            placeholder='Password' 
            value={signUpData.password} 
            onChange={handleSignUpChange} 
            className='w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500' required />
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type='submit' 
            className='w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-blue-700'>
            Send OTP
          </motion.button>
        </form>

        <p className='text-gray-600 mt-4'>Already have an account? <a href='/login' className='text-blue-600 font-semibold'>Login</a></p>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
