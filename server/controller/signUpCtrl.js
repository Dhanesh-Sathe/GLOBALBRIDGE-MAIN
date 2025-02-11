const User = require('../models/userModel');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcryptjs');
const { flattenDiagnosticMessageText } = require('typescript');

const sendOtp = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
    }

    await transporter.sendMail(mailOptions);
};

const verificationSuccessful = async (email) => {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verified',
        text: `${email} is verified successfully!!!`,
    }

    await transporter.sendMail(mailOptions);
};

const signUp = async (req,res) => {
    const {username, email, password} = req.body;
    console.log('req.body:', req.body);
    try{
        // OTP Generator
        const otp = otpGenerator.generate(4,{  digits: true, 
                                                upperCaseAlphabets: false, 
                                                specialChars: false, 
                                                lowerCaseAlphabets: false
                                            });
        const otpExpiration = Date.now() + 300000; // 5 minutes expirations

        const hashPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({username, email, password: hashPassword, otp, otpExpiration});
        await newUser.save();

        // Send OTP
        await sendOtp(email, otp);

        return res.status(200).json({success: true,message:'OTP Send Successfully!!!'});
    }
    catch(err){
        return res.status(500).json({success: false,message: err.message});
    }
};

// OTP Verification
const otpVerification = async (req, res) => {
    const { email, otp } = req.body;
    console.log('req.body:', req.body); // Log the incoming request body

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({success: false, message: 'User not found' });
        }

        // Log the user details retrieved from the database
        console.log('User found:', user);

        // Check the OTP and expiration
        if (user.otp === otp && Date.now() < user.otpExpiration) {
            // OTP valid
            user.otp = undefined; // Clear OTP
            user.otpExpiration = undefined; // Clear OtpExpiration
            await user.save();
            await verificationSuccessful(email);
            return res.status(200).json({success: true, message: 'OTP verified successfully!!!' });
        } else {
            return res.status(400).json({success: false, message: 'Invalid or expired OTP' });
        }
    } catch (err) {
        console.error('Error in OTP verification:', err); // Log the error
        return res.status(500).json({success: flattenDiagnosticMessageText, message: 'Internal server error' });
    }
};

const getUser = async (req,res) => {
    const {email} = req.params;
    try{
        const user = await User.findOne({email});
        if(user){
            res.status(200).json({success: true, user});
        }
        else{
            res.status(404).json({success:false, message:'User not found'});
        }
    }
    catch(err){
        console.error('Error finding user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const logIn = async (req,res) => {
    try{
        const { email, password } = req.body;
        console.log('req.body:', req.body);
        const user = await User.findOne({email});
        if(!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({success: false, message:'Invalid Credientials'});
        }
        res.status(200).json({success: true, message:'Login Successful'});
    }
    catch(err){
        res.status(500).json({success: false, message:'Login Failed'});
    }
}

module.exports = {signUp, otpVerification, getUser, logIn};
