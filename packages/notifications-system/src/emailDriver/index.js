"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "testingbookingsystem@gmail.com", // email of the testing account
      pass: "BSTestingC92022", // password of the testing account (could use env variables for better security)
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Testing Booking System" <testingbookingsystem@gmail.com>', // sender address
    to: "efren282@outlook.es", // list of receivers
    subject: "Testing email sending function", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);
