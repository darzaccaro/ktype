require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dev = process.env.NODE_ENV !== "production";
const app = express();
console.log(process.env.EMAIL_PASSWORD);

// TODO: store password in .env, get email off contact form
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "darbot9000@gmail.com",
    pass: process.env.EMAIL_PASSWORD
  }
});

//TODO: client-side validation
function generateContactEmail({
  name,
  email,
  company,
  url,
  details,
  deadline,
  priceRange
}) {
  return {
    from: "darbot9000@gmail.com",
    to: dev ? "darzaccaro@gmail.com" : "hi@ktype.xyz",
    subject: `${name} is attempting to make contact`,
    text:
      `Hi Kade,\n\n${name} (${email}) from ${company} (${url}) is interested in working with you on a project involving "${details}" that should be completed by ${deadline} for ${priceRange}.\n\nGLHF!\n` +
      String.raw(`TODO: put some ascii art here`)
  };
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/mail", (req, res) => {
  console.log("TESTMAIL");
  console.log(req.body);
  transporter.sendMail(generateContactEmail(req.body), function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("success");
});
app.listen(4000, err => {
  if (err) throw err;
  console.log("> Read on http://localhost:4000");
});
