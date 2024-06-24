document.addEventListener("DOMContentLoaded", function() {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", function() {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      todoInput.value = "";
    }
  });

  todoInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });

  function addTask(taskText) {
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      todoItem.classList.toggle("completed");
    });

    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      todoItem.remove();
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskLabel);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  }
});
