class UI {
  constructor({ appLogo }) {
    this.appLogo = document.querySelector("#app-logo");
    this.appLogo.src = appLogo;
    this.todoList = document.querySelector(".todo-list");
  }

  renderNavbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.innerHTML = `
            <div class="navbar__title">Todo App</div>
            <div class="navbar__actions">
                <button class="btn-outline">Add A Todo</button>
            </div>
        `;
    return navbar;
  }

  renderSidebar() {
    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");
    sidebar.innerHTML = `
            <div class="sidebar__title">Folders</div>
            <ul class="sidebar__folders">
                <li class="sidebar__folders__item">Inbox</li>
            </ul>
        `;
    return sidebar;
  }

  addNewTodoForm() {
    const newTodoForm = document.createElement("form");
    newTodoForm.classList.add("new-todo-form");
    newTodoForm.innerHTML = `
            <div class="new-todo-form__title">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>
            <div class="new-todo-form__description">
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div class="new-todo-form__due-date">
                <label for="due-date">Due Date</label>
                <input type="date" name="due-date" id="due-date" />
            </div>
            <div class="new-todo-form__priority">
                <label for="priority">Priority</label>
                <select name="priority" id="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div class="new-todo-form__actions">
                <button type="submit">Add</button>
                <button type="button" class="cancel">Cancel</button>
            </div>
        `;
    return newTodoForm;
  }

  addTodoToUI(todo) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
            <div class="todo-item__content">
                <input type="checkbox" class="todo-item__content__title">
                <div class="todo-item__content__title">${todo.getTitle()}</div>
                <div class="todo-item__content__description">${todo.getDescription()}</div>
                <div class="todo-item__content__due-date">${todo.getDueDate()}</div>
                <div class="todo-item__content__priority">${todo.getPriority()}</div>
            </div>
            <div class="todo-item__actions">
                <button class="todo-item__actions__edit">Edit</button>
                <button class="todo-item__actions__delete">Delete</button>
            </div>
        `;
    this.todoList.append(todoItem);
  }

  renderTodoForm() {
    const todoForm = document.createElement("form");
    todoForm.classList.add("todo-form");
    todoForm.innerHTML = `
            <div class="todo-form__description">
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div class="todo-form__due-date">

                <label for="due-date">Due Date</label>
                <input type="date" name="due-date" id="due-date" />
            </div>
            <div class="todo-form__priority">
                <label for="priority">Priority</label>
                <select name="priority" id="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div class="todo-form__actions">
                <button type="submit" class="btn-primary">Add</button>
                <button type="button" class="cancel btn-outline">Cancel</button>
            </div>

            
        `;
    return todoForm;
  }

  renderFolders() {
    const folders = document.querySelector(".folders");
    folders.innerHTML = `
            <div class="folders__header">
                <h2>Folders</h2>
                <button class="folders__header__add">Add</button>
            </div>
            <ul class="folders__list"></ul>
        `;
  }

  showModal(modal) {
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
    modalContainer.append(modal);
    document.body.append(modalContainer);
  }

  render() {
    const navbar = this.renderNavbar();
    const sidebar = this.renderSidebar();
    // const todoList = this.renderTodoList();
    app.append(navbar, sidebar);
  }
}

class Modal {
  constructor({ title, content }) {
    this.title = title;
    this.content = content;
  }

  render() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
            <div class="modal__title">${this.title}</div>
            <div class="modal__content">${this.content.outerHTML}</div>
        `;
    return modal;
  }
}

export { UI, Modal };
