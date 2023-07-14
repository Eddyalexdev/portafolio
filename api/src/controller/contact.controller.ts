import { Response, Request } from "express"
import { sendMessage } from "../services/contact.service"

export const postMessage = async ({body}: Request, res: Response) => {
  try {
    const contact = await sendMessage(body) 
    res.send(contact)
  } catch(error) {
    res.status(500).send('No se pudo enviar el mensaje')
  }
}
