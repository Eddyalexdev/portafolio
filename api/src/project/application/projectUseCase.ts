import { ProjectRepository } from "../domain/project.respository";
import { ProjectValue } from "../domain/project.value";

export class projectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {

  }

  public createProject({name, description, image}: {name: string, description: string, image: string}) {
    const project = new ProjectValue({name, description, image, categories: [1]})
    const projectCreated = this.projectRepository.createProject(project)
    return projectCreated
  }
}
