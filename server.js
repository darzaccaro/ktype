require("dotenv").config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dev = process.env.NODE_ENV !== "production";
const express = require("express");
const app = express();

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
    text: `Hi Kade,\n\n${name} (${email}) from ${company} (${url}) is interested in working with you on a project involving "${details}" that should be completed by ${deadline} for ${priceRange}.\n\nGLHF!\n—darbot9000`
  };
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/mail", (req, res) => {
  console.log("TESTMAIL");
  console.log(req.body);
  console.log(req.query);
  transporter.sendMail(generateContactEmail(req.query), function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Something broke!");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent!");
    }
  });
});

app.listen(4000, err => {
  if (err) throw err;
  console.log("> Listening on http://localhost:4000");
});
