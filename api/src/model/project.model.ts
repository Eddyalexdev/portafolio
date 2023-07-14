import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String 
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const projectModel = model('projects', projectSchema)
export default projectModel

