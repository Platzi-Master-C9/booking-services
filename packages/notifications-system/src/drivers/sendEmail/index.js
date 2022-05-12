const nodemailer = require("nodemailer");
require("dotenv").config();

const prefix = require("../../../config/environment");

async function main() {
  // create reusable transporter object using the Gmail SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env[`${prefix}EMAIL_ACCOUNT`], // email of the account that will send the emails
      pass: process.env[`${prefix}EMAIL_PASS`], // password of the account
    },
  });

  // send mail with defined transport object.
  transporter.sendMail({
    from: `Testing Booking System <${process.env[`${prefix}EMAIL_ACCOUNT`]}>`, // sender address
    to: process.env[`${prefix}EMAIL_ACCOUNT`], // list of receivers
    subject: "Testing email sending function", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
}

main().catch();
