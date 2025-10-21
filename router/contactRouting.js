const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const contactRouting = express.Router();

contactRouting.post('/contact', async (req, res) => {
  const { name, mobile, email, message } = req.body;


  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ status: false, message: "All fields are required" });
  }


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

  const mailOptions = {
    from: email,
    to: "muhammadatfan17@gmail.com", 
    subject: 'Contact Form Request from FitVerse Gym',
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");
    return res.status(200).json({ status: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error("Mail sending failed:", error);
    return res.status(500).json({ status: false, message: "Mail sending failed" });
  }
});

module.exports = contactRouting;
