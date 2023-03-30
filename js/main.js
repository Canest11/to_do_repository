let tasks = [
    "Take out trash",
    "Clean dishes",
    "Pick up dry cleaning",
    "Pick up the groceries",
];
let completedTasks = [];
const todosList = document.getElementById("todosList");
const completedList = document.getElementById("completedList");
const todosListCount = document.getElementById("tasksCount")
const completedListCount =document.getElementById("tasksCompleted");
function createTaskListItem (task, index, forCompleted = false) {let li = document.createElement("li");
let li = document.createElement("li")
let taskId = `task${index}`;
li.textContent = task;
return li;
}
todosList.appendChild(createTaskListItem(practice))