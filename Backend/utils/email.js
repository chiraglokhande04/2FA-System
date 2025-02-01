const nodemailer = require("nodemailer");
const dotenv = require('dotenv')


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
        user:'chiraglokhande10@gmail.com',
        pass: 'jahz wsbq jzaa ewfz',
    },
});

const otpMailTemplate = (otp) => {

    return `
     <h1>Email Verification</h1>
    <p>Your OTP for email verification is: <strong>${otp}</strong></p>
    <p>Please enter this OTP to verify your email address.</p>
    `
}

const sendOTP = async (email, OTP) => {

    const emailContent = otpMailTemplate(OTP)
    try {
        const info = await transporter.sendMail({
            from: `"Chirag Lokhande" <chiraglokhande10@gmail.com>`, // sender email
            to: email, // recipient email
            subject: "OTP Verification !", // subject
            html: emailContent, // HTML email content
        });
        console.log("OTP sent successfully. Message ID: %s", info.messageId);
    } catch (err) {
        console.error("Error in sending OTP:", err.message || err);
    }

}

module.exports = { sendOTP }