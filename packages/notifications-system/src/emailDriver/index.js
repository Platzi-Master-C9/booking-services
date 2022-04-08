const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the Gmail SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "testingbookingsystem@gmail.com", // email of the account that will be used to send the emails
      pass: "BSTestingC92022", // password of the account (could use env variables for better security)
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Testing Booking System" <testingbookingsystem@gmail.com>', // sender address
    to: "efren282@outlook.es", // list of receivers
    subject: "Testing email sending function", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Proving that the email was sent
}

main().catch(console.error);
