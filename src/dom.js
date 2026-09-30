import { Task } from "./todo.js";

let taskForm = document.querySelector("#task-form");

let content = document.querySelector("#content");






//Submitting the task and adding it to todo list

let taskTitle = document.querySelector("#task-title");
let taskDescription = document.querySelector("#task-description");
let taskDueDate = document.querySelector("#task-date");
let taskPriority = document.querySelector("#task-priority");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  

  let newTask = new Task(
    taskTitle.value,
    taskDescription.value,
    taskDueDate.value,
    taskPriority.value,
  );
  console.log(newTask.title);

  //  let material = JSON.stringify(newTask);
  let newTaskTitle = document.createElement("span");
  newTaskTitle.textContent = newTask.title;
  let newTaskDescription = document.createElement("div");
  newTaskDescription.textContent = newTask.description;
  let newTaskDueDate = document.createElement("div");
  newTaskDueDate.textContent = newTask.dueDate;

  let taskInfoHolderDiv = document.createElement("div");
  taskInfoHolderDiv.classList.add("task-card");
  let checkbox = document.createElement("input");
  checkbox.classList.add("check-box");
  checkbox.type = "checkbox";

  let taskTextDiv = document.createElement("div");
  taskTextDiv.classList.add("task-text");
  taskTextDiv.appendChild(newTaskTitle);
  taskTextDiv.appendChild(newTaskDescription);
  taskTextDiv.appendChild(newTaskDueDate);

  taskInfoHolderDiv.appendChild(checkbox);
  taskInfoHolderDiv.appendChild(taskTextDiv);
  content.appendChild(taskInfoHolderDiv);
  //  content.textContent = material;

  taskDialog.close();
});

// let newProject = document.querySelector("#new-project")

// newProject.addEventListener('click' , (event)=>{

// })
//cancel task button
let cancelBtn = document.querySelector("#cancel-btn");
let taskDialog = document.querySelector("#task-dialog");

cancelBtn.addEventListener("click", () => {
  taskDialog.close();
});






