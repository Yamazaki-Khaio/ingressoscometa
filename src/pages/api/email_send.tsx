import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;


  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: "ingressoscometanaoresponda@outlook.com",
      pass: "Vaidormir23"
    }
  });

  const mailOptions = {
    from: 'ingressoscometanaoresponda@outlook.com',
    to: email,
    subject: 'Bem-vindo ao Cometa Ingressos',
    text: 'Olá, bem-vindo ao Cometa Ingressos! Faça suas compras seguras aqui.'
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail de boas-vindas enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail de boas-vindas:', error);
    res.status(500).json({ error: 'Erro ao enviar o e-mail de boas-vindas.' });
  }
}
