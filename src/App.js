import Folder from "./Folder";
import Todo from "./Todo";
import { UI, Modal } from "./UI";

import appLogo from "./assets/todo-icon.svg";

class App {
  constructor() {
    this.folders = [];
    this.folders.push(new Folder("Inbox"));
    this.ui = new UI({ appLogo });
  }

  getFolders() {
    console.log(this.folders);
    return this.folders;
  }

  addFolder(folder) {
    const newFolder = new Folder(folder);
    this.folders.push(newFolder);
  }

  addTodoToFolder = (folder, todo) => {
    this.folders.find((f) => f.name === folder).addTodo(todo);
  };

  renderFolders() {
    this.ui.renderFolders(this.folders);
  }

  renderTodos() {
    this.ui.renderTodos(this.activeFolder.getTodos());
  }

  renderTodoModal() {
    const todoModal = new Modal({
      title: "Add Todo",
      content: this.ui.renderTodoForm(),
    });

    this.ui.showModal(todoModal.render());
  }

  init() {
    this.ui.render();
  }
}

export default App;
