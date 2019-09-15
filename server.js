require("dotenv").config();
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// TODO: store password in .env, get email off contact form
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "darbot9000@gmail.com",
    pass: process.env.EMAIL_PASSWORD
  }
});

//TODO: client-side validation
function generateContactEmail({
  name,
  email,
  subject,
  details,
  deadline,
  priceRange
}) {
  return {
    from: email,
    to: "darzaccaro@gmail.com", //TODO: change to "hi@ktype.xyz",
    subject: subject,
    text: `Hi Kade,\n${name} is interested in working with you on a project involving "${details}" that should be completed by ${deadline} for ${priceRange}.\nGLHF!\n--darbot9000`
  };
}

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.post("/testmail", (req, res) => {
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
  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
