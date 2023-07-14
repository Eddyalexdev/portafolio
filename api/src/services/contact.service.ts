import { IContact } from "../intefaces/contact.interface";
import contactModel from "../model/contact.model";

export const sendMessage = async (data: IContact) => {
  const contact = await contactModel.create(data) 
  return contact
}
