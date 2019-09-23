const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv-safe').config();

const app = express();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAILSEND,
    subject: 'Email com node',
    text: 'Texto teste'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log("Email enviado: " + info.response);
    }
});

app.get('/', (req, res) => {
    console.log('Rodando');
});

app.listen(3000);