import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Home.css'; // Assuming you're using your own CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {

    const { setUser } = useUser();
    const navigate = useNavigate();
  
  const [verifyEmail, setVerifyEmail] = useState('');
  

  const [optVerifyData, setOptVerifyData] = useState({
    email:'',
    otp:''
  });

  // Get email from localStorage when the component mounts
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setVerifyEmail(storedEmail);
    } else {
      // Redirect to sign-up page if no email is found in localStorage
      window.location.href = '/signup';
    }
  }, []);

  // Handle OTP input changes
  const handleOtpChange = (e) => {
    const {name,value}  = e.target;
    setOptVerifyData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

   const getUesr = async(optVerifyData.email) => {
     return await axios.get(`https://globalbridge-server.onrender.com/api/verify-otp/${optVerifyData.email}`);
   }
  // Function to verify OTP
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    const otpToSend = parseInt(optVerifyData.otp, 10); // Convert to number

    try {
        if(verifyEmail === optVerifyData.email){

        
      const response = await axios.post('https://globalbridge-server.onrender.com/api/verify-otp', {email:optVerifyData.email, otp:otpToSend});
      const getUser = await axios.get(`https://globalbridge-server.onrender.com/api/verify-otp/${optVerifyData.email}`);
      const userData = {username: getUser.data.user.username, email: getUser.data.user.email};
      setUser(userData);
      console.log(getUser);
      console.log(userData);
      const {success,message} = response.data;
      if(success){
        console.log('SignUp Successfully!!!');
        toast.success('SignUp successful!');
        setTimeout(() => {
          navigate('/');
        }, 1500); 
//     window.location.href = '/signupcomplete'; // Adjust this as per your next page
      }
      else{
        console.log(message);
        toast.error(message);
        // toast.error(message);
      }
        }
    } catch (err) {
      console.error('Error verifying OTP:', err);
    }
  };
  return (
    <div className='bgColor1 min-h-screen'>
      <div className='flex flex-row'>
        <div className='h-[500px] w-[40%]'>
          <img
            src="./images/bg6.jpg"
            alt="Background"
            className='w-full h-full mt-[70px] ml-[150px] mb-[50px] object-cover borderRadius1 overflow-hidden'
          />
        </div>
        <div>
          <div className='flex ml-[200px] mr-[50px]'>
            <img
              src="./images/logo-removebg-preview.png"
              alt="Logo"
              className='h-[100px] w-[100px]'
            />
            <a href="/"><h1 className='cinzel text-5xl font-bold items-center my-6'>GlobalBridge</h1></a>
          </div>
          <div className='mt-[20px] mr-[100px] mb-[50px] ml-[280px]'>
            <div className='bg-blue-300 mb-5 p-5 mt-2'>
              <h2 className='text-center text-3xl Geneva font-bold'>OTP Verification</h2>

              <form onSubmit={handleOtpSubmit}>
              <div className='m-[10px]'>
                  <label htmlFor="email" className='text-lg font-semibold Arial'>Email <span>*</span></label> <br />
                  <input
                    type="email"
                    id="email"
                    name='email'
                    value={optVerifyData.verifyEmail}
                    onChange={handleOtpChange}
                    required
                    className='h-[30px] w-[300px] text-lg TimesNewRoman px-[20px] py-[5px] rounded my-[5px] mx-[10px]'
                  /><br />
                </div>
                <div className='m-[10px]'>
                  <label htmlFor="otp" className='text-lg font-semibold Arial'>Enter OTP <span>*</span></label><br />
                  <input
                    type="text"
                    id="otp"
                    name='otp'
                    value={optVerifyData.otp}
                    onChange={handleOtpChange}
                    required
                    className='h-[30px] w-[300px] text-lg TimesNewRoman px-[20px] py-[5px] rounded my-[5px] mx-[10px]'
                  /><br />
                </div>
                
                <button
                  type="submit"
                  className='w-[320px] mx-[10px] py-[7px] px-[20px] text-lg rounded border-black border-solid bg-blue-700 cursor-pointer text-white font-semibold'>
                  Sign Up
                </button>
              </form>

              <p className='text-center text-base'>Didn't receive OTP? <span className='text-lg font-bold'><a href="/resend-otp">Resend OTP</a></span></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OtpVerification;
