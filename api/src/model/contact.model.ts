import {Schema, model} from 'mongoose'

const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    message: {
      type: String,
      require: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const contactModel = model('contacts', contactSchema)
  export default contactModel
