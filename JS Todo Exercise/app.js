const formElement = document.querySelector("form");
const newTaskInput = document.querySelector("#taskName");
const taskList = document.querySelector("#taskContainer");
let numberOfTasks = 0;
/*console.log(JSON.parse(localStorage.getItem("todos")));
let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

if (savedTodos) {
    for (todo of savedTodos) {
        createTask(todo.name, todo.checked);
        numberOfTasks++;
    }
}*/

formElement.addEventListener("submit", function(e){
    e.preventDefault();

    // Create and append new Task
    if (newTaskInput.value) {
        createTask(newTaskInput.value, false);
        newTaskInput.value = '';
    }
})

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
    });

function taskComplete(checkboxElement) {
    if (checkboxElement.checked) {
        checkboxElement.nextElementSibling.classList.add("checked");
    } else {
        checkboxElement.nextElementSibling.classList.remove("checked");
    }
}

function createTask(taskName, isChecked) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.setAttribute("id", `task${numberOfTasks}`);
    taskCheckbox.setAttribute("name", `task${numberOfTasks}`);
    taskCheckbox.setAttribute("onchange", "taskComplete(this)");
    if(isChecked) {taskCheckbox.setAttribute("checked", '');}

    const taskLabel = document.createElement("label");
    taskLabel.setAttribute('for', `task${numberOfTasks}`);
    taskLabel.innerText = taskName;

    const taskRemoveButton = document.createElement("button");
    taskRemoveButton.innerHTML = "&#128465;";

    taskDiv.append(taskCheckbox);
    taskDiv.append(taskLabel);
    taskDiv.append(taskRemoveButton);
    taskList.append(taskDiv);
    numberOfTasks++;
    /*savedTodos.push({name: taskName, checked: isChecked});
    localStorage.setItem("todos", JSON.stringify(savedTodos));*/
}