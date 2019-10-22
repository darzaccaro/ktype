require("dotenv").config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const dev = process.env.NODE_ENV === "production"; // TODO: toggle back
const express = require("express");
const morgan = require("morgan");
const app = express();

const transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: "darbot9002@hotmail.com",
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
    from: "darbot9002@hotmail.com",
    to: dev ? "darzaccaro@gmail.com" : "hi@ktype.xyz",
    subject: `${name} is attempting to make contact`,
    text: `Hi Kade,\n\n${name} (${email}) from ${company} (${url}) is interested in working with you on a project involving "${details}" that should be completed by ${deadline} for ${priceRange}.\n\nGLHF!\n—darbot9000`
  };
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

app.post("/api/mail", (req, res) => {
  console.log("Sending Mail");
  console.log(req.body);
  transporter.sendMail(generateContactEmail(req.body), function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Something broke!");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent!");
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, err => {
  if (err) throw err;
  console.log(`> Listening on PORT ${port}`);
});
