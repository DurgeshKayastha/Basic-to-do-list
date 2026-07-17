function saveStorage(projectManager) {
  let savedProject = JSON.stringify(projectManager.projects);
  localStorage.setItem("projects", savedProject);
  return savedProject;
}

function loadProjects() {
  let loadedProject = localStorage.getItem("projects");

  if (!loadedProject) {
    return [];
  }

  let projectsData = JSON.parse(loadedProject);
  return projectsData;
}

export { loadProjects, saveStorage };
