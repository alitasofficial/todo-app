import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
  }
}

export default Todo;
