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
    subject: 'Obrigado pela compra',
    text: 'Aqui estão as informações da sua compra'
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail de finalização de compra enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail de finalização de compra:', error);
    res.status(500).json({ error: 'Erro ao enviar o e-mail de finalização de compra.' });
  }
}
