export class Project {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.tasks = [];
  }





  
  
  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
