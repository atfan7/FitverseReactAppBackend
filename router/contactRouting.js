const express = require('express');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const contactRouting = express.Router();

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

contactRouting.post('/contact', async (req, res) => {
    try {
        const { name, mobile, email, message } = req.body;

        const msg = {
            to: 'muhammadatfan17@gmail.com', 
            from: 'muhammadatfan17@gmail.com',
            subject: 'Contact Form Request from FitVerse Gym',
            text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
            replyTo: email, 
        };

        await sgMail.send(msg);
        console.log("Mail sent successfully");
        res.send({ status: true, message: "Mail sent successfully" });

    } catch (error) {
        console.error("Error sending email:", error);
        if (error.response) {
            console.error(error.response.body);
        }
        res.status(500).send({ status: false, message: "Something went wrong" });
    }
});

module.exports = contactRouting;
