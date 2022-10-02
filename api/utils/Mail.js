const mailer = require("../configs/Mailer");

module.exports = sendForgotPasswordEmail = async (mail, token) => {
  console.log("Password Reset token: ", token);
  await mailer.sendMail({
    from: process.env.MAILER_ADD,
    to: mail,
    subject: "TODO: Forgot Password",
    text: "This is an automated password request email sent by the server.\
          Please don't reply.",
    html: `\
          <h1>TODO: Password Reset Request</h1>\
          <p>You recently requested to reset your forgotton password. If you don't\
          know about this then please delete this email.</p><br>\
          <b><a href='http://${process.env.HOST}:${
      process.env.PORT || 80
    }/api/resetpassword?token=${token}'>\
          Click here to change your password</a></b>`, // html body
  });
};

module.exports = sendVerifyMailEmail =(mail, token) => {
  console.log("Mail verification token: ", token);
  mailer.sendMail({
    from: process.env.MAILER_ADD,
    to: mail,
    subject: "TODO: Verify Email",
    text: "This is an automated email verification request sent by the server.\
            Please don't reply.",
    html: `\
            <h1>TODO: Email Verification Request</h1>\
            <p>You recently requested to verify your email. If you don't\
            know about this then please delete this email.</p><br>\
            <b><a href='http://${process.env.HOST}:${
      process.env.PORT || 80
    }/api/verifyMail?token=${token}'>\
            Click here to verify your email</a></b>`, // html body
  });
};
