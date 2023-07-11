import { ProjectEntity } from "./project.entity";

export class ProjectValue implements ProjectEntity {
  uuid: string
  name: string
  image: string
  description: string
  categories: number[]

  constructor({name, image, description, categories}: {name: string, image: string, description: string, categories: number[]}) {
    this.uuid = ''
    this.name = name
    this.description = description,
    this.image = image,
    this.categories = [...categories]
  }
}
