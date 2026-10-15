const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const inputMessage = document.getElementById("inputMessage");
const emptyState = document.getElementById("emptyState");


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        inputMessage.textContent = "Please enter a task.";
        return;
    }

    inputMessage.textContent = "";

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const taskContent = document.createElement("label");
    taskContent.classList.add("task-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-task");

    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskTextElement);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";

    updateTaskCount();
    updateEmptyState();


    checkbox.addEventListener("change", function () {
        taskItem.classList.toggle("completed", checkbox.checked);
    });


    deleteButton.addEventListener("click", function () {
        taskItem.remove();

        updateTaskCount();
        updateEmptyState();
    });
}


function updateTaskCount() {
    const tasks = document.querySelectorAll(".task-item");
    taskCount.textContent = tasks.length;
}


function updateEmptyState() {
    const tasks = document.querySelectorAll(".task-item");

    if (tasks.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}


addTaskButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});