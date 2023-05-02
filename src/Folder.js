import { v4 as uuidv4 } from "uuid";

class Folder {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
    this.todoList = [];
  }

  getId() {
    return this.id;
  }

  getTodoList() {
    return this.todoList;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
}

export default Folder;
