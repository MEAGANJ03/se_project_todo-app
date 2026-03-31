class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = this._todoElement("#todo-template");
  }

  setEventListeners() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoCheckboxEl.addEventListener("change", (event) => {
      this._data.completed = event.target.checked;
      this._data.completed;
    });
  }

  generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    return this._todoLabel;
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");

    todoNameEl.textContent = this._data.name;
    todoCheckboxEl.checked = this._data.completed;

    this._generateCheckboxEl();
    this._setEventListeners();

    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);

    return this._todoElement;
  }
}

export default Todo;
