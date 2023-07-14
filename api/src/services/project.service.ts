import { IProject } from "../intefaces/project.interface"
import projectModel from "../model/project.model"

export const allProjects = async () => {
  const projects = await projectModel.find({})
  return projects
}

export const createProject = async (data: IProject) => {
  const response = await projectModel.create(data)
  return response
}
