const nodemailer = require("nodemailer");

export default (req, res) => {
  const { name, email, subject, message } = JSON.parse(req.body);
  if (name && email && subject && message) {
    const hostMail = process.env.NEXT_PUBLIC_MAIL_AUTH_USER;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_AUTH_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_AUTH_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailData = {
      from: email,
      to: hostMail,
      subject,
      text: ` gönderici email : ${email}, konusu ise ${subject} Ben ${name} sana gonderdigim mesaj ise su: ${message} `,
    };

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        res.json({ msg: "ERR var", data: { err } });
      }
      if (info) {
        res.json({ msg: "info var", data: { info } });
      }
    });
  }
  // res.status(200).json({ status: "OK" });
};
