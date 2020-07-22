require("dotenv").config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const express = require("express");
const morgan = require("morgan");
const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ktypexyz@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

function generateContactEmail({ name, email, details }) {
  return {
    from: "ktypexyz@gmail.com",
    to: "hi@ktype.xyz",
    subject: `New Form Submission from ${name}`,
    text: `
    Name: ${name}\n
    Email: ${email}\n
    Details: ${details}\n
    \n\n—Submitted via ktype.xyz/contact`,
  };
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// Forward to https(heroku)
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

app.post("/api/mail", (req, res) => {
  console.log("Sending Mail");
  console.log(req.body);
  transporter.sendMail(generateContactEmail(req.body), function (error, info) {
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
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Listening on PORT ${port}`);
});
