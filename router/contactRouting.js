const express =require('express')
const nodemailer =require("nodemailer");
require('dotenv').config();


const contactRouting =express.Router();

contactRouting.post('/contact',(req,res)=>{

    try {
        const {name,mobile,email,message} =req.body;

        const transport = nodemailer.createTransport({
            service : "gmail",
            auth :{
                user:process.env.EMAIL_USER,
                pass :process.env.EMAIL_PASS

            },
        });

        const mailOptions ={
            from : `${email}`,
            to :"muhammadatfan17@gmail.com",
            subject : `Contact Form Request from FitVerse Gym`,
            text: `Name: ${name} \nEmail : ${email} \nMobile : ${mobile} \nMessage : ${message}`
        }

        transport.sendMail(mailOptions,(error,info)=>{
            if(error) throw error;
            res.send({status : true,message :"Mail Sent Successfully"})
            console.log("Mail Sent Successfully")
        })




    }

    catch(err){
        res.send ({status:false,message :"Something Went Wrong"})

    }




})

module.exports =contactRouting;