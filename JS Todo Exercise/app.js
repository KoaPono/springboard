const formElement = document.querySelector("form");
const newTaskInput = document.querySelector("#taskName");
const taskList = document.querySelector("#taskContainer");
let numberOfTasks = 0;
let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

if (savedTodos != []) {
    for (todo of savedTodos) {
        console.log(todo);
        createTask(todo.name, todo.checked);
    }
}

formElement.addEventListener("submit", function(e){
    e.preventDefault();

    // Create and append new Task
    if (newTaskInput.value) {
        createNewTask(newTaskInput.value);
        newTaskInput.value = '';
    }
})

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        const desiredId = e.target.previousSibling.previousSibling.id;
        const foundIndex = savedTodos.findIndex(obj => obj.taskId === desiredId);

        if (foundIndex !== -1) {
            const removedObject = savedTodos.splice(foundIndex, 1);
            console.log('Removed object:', removedObject[0]);
        }
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        e.target.parentElement.remove();
    }
});

function taskComplete(checkboxElement) {
    const desiredId = checkboxElement.id;
    const foundIndex = savedTodos.findIndex(obj => obj.taskId === desiredId);
    const foundObject = savedTodos[foundIndex];
    if (checkboxElement.checked) {
        checkboxElement.nextElementSibling.classList.add("checked");
        if (foundObject) {
            foundObject.checked = true;
        }
    } else {
        checkboxElement.nextElementSibling.classList.remove("checked");
        if (foundObject) {
            foundObject.checked = false;
        }
    }
    console.log(savedTodos);
    savedTodos.splice(foundIndex, 1, foundObject);
    console.log(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function createTask(taskName, isChecked) {
    // Create wrapper div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Create checkbox
    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.setAttribute("id", `task${numberOfTasks}`);
    taskCheckbox.setAttribute("name", `task${numberOfTasks}`);
    taskCheckbox.setAttribute("onchange", "taskComplete(this)");
    if(isChecked) {taskCheckbox.setAttribute("checked", '');}

    // Create task label
    const taskLabel = document.createElement("label");
    taskLabel.setAttribute('for', `task${numberOfTasks}`);
    taskLabel.innerText = taskName;

    // Create remove task button
    const taskRemoveButton = document.createElement("button");
    taskRemoveButton.innerHTML = "-";

    // Add all elements to wrapper div and add wrapper div to list
    taskDiv.append(taskCheckbox);
    taskDiv.append(taskLabel);
    taskDiv.append(taskRemoveButton);
    taskList.append(taskDiv);
    numberOfTasks++;
    if (isChecked) {
        taskLabel.classList.add("checked");
    }
}

function createNewTask (taskName) {
    createTask(taskName, false);

    // num of tasks -1 because it's already been incremented
    savedTodos.push({name: taskName, checked: false, taskId: `task${numberOfTasks-1}`});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}