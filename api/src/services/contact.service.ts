import { IContact } from "../intefaces/contact.interface";
import contactModel from "../model/contact.model";
import nodemailer from 'nodemailer'
import "dotenv/config"

export const sendMessage = async (data: IContact) => {
  const contact = await contactModel.create(data) 

  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_MAIL || "",
      pass: process.env.PASS_MAIL || ""
    }
  })

  const message = await transporter.sendMail({
    from: contact.email,
    to: 'Eddyalex.dev@gmail.com',
    subject: 'Contact with portfolio',
    html: `<h1>${contact.name}</h1>
          <p>${contact.message}</p>
    `
  })

  return message
}
