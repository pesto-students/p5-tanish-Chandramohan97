var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chandramsriv@gmail.com",
    pass: "zlciqyuzunkzjlgy",
  },
});

var mailOptions = {
  from: "chandramsriv@gmail.com",
  to: "chandra@test.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

module.exports = { transporter, mailOptions };
// module.exports = mailOptions;
