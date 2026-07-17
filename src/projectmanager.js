export class ProjectManager {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(projectId) {
    this.projects = this.projects.filter((item) => item.id !== projectId);
  }

  getProject(projectId) {
    return this.projects.find((project) => project.id === projectId);
  }
}
