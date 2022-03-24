//Const
const domSelectors = {
  todolistHeader: ".todolist__header",
  todolistContent: ".todolist__content",
  todoButton: ".input-bar__submit",
  barInput: ".input-bar__input",
};

// Data
const title = "My To Do List";
const submitText = "Add";
let todos = [
  {
    userId: 1,
    id: 1,
    title: "Hit the gym",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "code JS",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "Cook comida",
    completed: true,
  },
  {
    userId: 1,
    id: 4,
    title: "Read a book",
    completed: false,
  },
];

function addTodo() {
  document
    .querySelector(domSelectors.todoButton)
    .addEventListener("click", inputValueExtract);
}
function inputValueExtract() {
  const inputValue = document.querySelector(domSelectors.barInput);
  if (inputValue.value.length < 1) return;
  let obj = {
    userId: 1,
    id: todos.length + 1,
    title: inputValue.value,
    completed: false,
  };
  todos.push(obj);
  renderTodoList(todos);

  inputCleaner(inputValue);
}

function inputCleaner(input) {
  input.value = "";
}
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}

function generateHeaderContent(title, submitText) {
  return `<h1 class="todolist__header__title">${title}</h1>
  <div class="input-bar">
      <input class="input-bar__input"/>
      <button class="input-bar__submit">${submitText}</button>
  </div>`;
}

function generateTodoItem(todo) {
  return `<li id="todo-${todo.id}" class="todolist__content__row">
  <span class="todolist__content__item">${todo.title}</span>
  <button  class="todolist__content__action" >X</button>
</li>`;
}

function generateTodoList(todos) {
  return todos.map((todo) => generateTodoItem(todo)).join("");
}

function renderHeader(title, submitText) {
  const ele = document.querySelector(domSelectors.todolistHeader);
  const tmp = generateHeaderContent(title, submitText);
  render(ele, tmp);
}

function renderTodoList(todos) {
  const tmp = generateTodoList(todos);
  const ele = document.querySelector(domSelectors.todolistContent);
  render(ele, tmp);
}

function render(element, template) {
  element.innerHTML = template;
}

function setUpEvent() {
  document
    .querySelector(domSelectors.todolistContent)
    .addEventListener("click", (e) => {
      if (isDeleteButton(e.target)) {
        const id = getTodoIdFromBtn(e.target);
        deleteTodo(id);
        renderTodoList(todos);
      }
    });
}

function getTodoIdFromBtn(btnElement) {
  return +btnElement.parentElement.id.substring(5);
}

function isDeleteButton(element) {
  return element.classList.contains("todolist__content__action");
}

// init
renderHeader(title, submitText);
renderTodoList(todos);

// init Event
setUpEvent();
addTodo();
