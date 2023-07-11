import { ProjectEntity } from "./project.entity";

export interface ProjectRepository {
  findProjects():Promise<ProjectEntity[] | null>
  findProjectById(uuid: string): Promise<ProjectEntity | null>
  createProject({name, description, image}: {name: string, description: string, image: string}): Promise<ProjectEntity | null>
}
