const { Router } = require("express");
const { transporter } = require("../nodemailer/mailer");

const router = Router();

router.post("/form", async (req, res) => {
  try {
    const { name, cellphone, email, subject, message } = req.body;

    await transporter.sendMail({
      from: "xavier.mont.0409@gmail.com", // sender address
      to: email, // list of receivers
      subject: `${subject}`, // Subject line
      text: "Hello world", // plain text body
      html: `
    <h1>Estimado usuario ${name},con numero de contacto ${cellphone}</h1>
    <h3>Le informamos que su consulta en nuestra plataforma ha sido exitosa</h3>
    <p>su consulta "${message}"</p>`,
    });
    res.status(200).json("response");
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
