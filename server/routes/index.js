// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");

// const routes = () => {
//   router.get("/", (req, res) => {
//     const { name, email, subject, message } = req.body;
//     console.log(req.body);
//     if (name && email && subject && message) {
//       const hostMail = process.env.USER;
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.USER,
//           pass: process.env.PASS,
//         },
//         tls: {
//           rejectUnauthorized: true,
//         },
//       });

//       const mailData = {
//         from: email,
//         to: hostMail,
//         subject,
//         text: ` gönderici email : ${email}, konusu ise ${subject} Ben ${name} sana gonderdigim mesaj ise su: ${message} `,
//       };

//       transporter.sendMail(mailData, (err, info) => {
//         if (err) {
//           res.json({ msg: "ERR var", data: { err } });
//         }
//         if (info) {
//           res.json({ msg: "info var", data: { info } });
//         }
//       });
//     }
//   });

//   // router.get("/:id", (req, res) => {
//   //   return app.render(req, res, "/", { id: req.params.id });
//   // });

//   return router;
// };

// module.exports = routes;
