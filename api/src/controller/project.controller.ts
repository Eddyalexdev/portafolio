import { Request, Response } from "express"
import { allProjects, createProject } from "../services/project.service"

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await allProjects() 
    res.send(projects)
  } catch(error) {
    res.status(501).send(error)
  }
}

export const postProject = async ({body}: Request, res: Response) => {
  try {
    const project = await createProject(body)
    res.json({'message': 'created', 'project': project})
  } catch (error) {
    res.status(501).send(error)
  }
} 
