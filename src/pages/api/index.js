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

    const output = `
    <div style=" margin: 0 15%;
    border-radius: 20px;
    background-color: whitesmoke;
    margin-top: -20px;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);">
        <div style="margin: 20px;
        padding: 10px;">
            <h2><i class="fa fa-suitcase " style="font-size: xx-large;"></i>Yeni bir mesajınız var</h2>
            <div>
                <h5><b>Mesaj Detayı</b></h5>
                <h6><i class="fa fa-calendar " style="font-size: x-large;"></i> 2022 - <span style="padding: 6px;
                        background-color: teal;
                        color: white;
                        border-radius: 3px;">Current</span>
                </h6>
                <ul style="list-style-type: none;
                margin: 0;
                padding: 0; ">
                  <li><b>Ad soyad : </b>${name}</li>
                  <li><b>Gönderici email : </b> ${email}</li>
                  <li><b>Mesajın konusu : </b>${subject}</li>
                </ul>
                <h3>Mesaj</h3>
                <p>${message}</p>
            </div>
        </div>
    </div>
  `;

    const mailData = {
      from: email,
      to: hostMail,
      subject: "ABK Alüminyum - Yeni Bir Mesaj",
      html: output,
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
