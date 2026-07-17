export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
    this.priority = priority;
    this.id = crypto.randomUUID();
  }
}
