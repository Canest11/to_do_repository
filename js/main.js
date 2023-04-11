let tasks = [
    "Take out trash",
    "Clean dishes",
    "Pick up dry cleaning",
    "Pick up groceries",
    "Practive Javascript"
];
let completedTasks = [];

const todosList = document.getElementById("todosList");
const completedList = document.getElementById("completedList");

const todosListCount = document.getElementById("tasksCount");
const completedListCount = document.getElementById("tasksCompleted");

function createTaskTodoItems(tasks) {
    tasks.forEach((task, index) => {
        let li = createListItem(task, index);
        todosList.appendChild(li);
    });
}

function createListItem(task, index, forCompleted = false) {
    let li = createElement("li", {
        _id: `task${index}`,
        classes: "row justify-content-between p-0 me-2 my-3 align-items-center border border-2 border-dark"
    });
    const taskNameColumn = createElement("div", { classes: "col-md-6"});
    const taskNameP = createElement("p", {classes: "m-0", text: task});
    taskNameColumn.appendChild(taskNameP);
    const taskActionsColumn = createElement("div", { 
        classes: "col-md-4 d-flex align-items-center justify-content-end m-0 p-0"
    });
    const actionBtn = createActionBtn("btn border-0 p-0", "Remove from Todo List", `
    <span aria-hidden="true">
        <i class="fa-solid fa-xmark"></i>
    </span>
    <span class="visually-hidden">
        Remove from Todo
    </span>
`);
    const completeActionInput =  forCompleted ? 
                                    createCompleteAction(index, true) : 
                                    createCompleteAction(index);
    taskActionsColumn.append(completeActionInput, actionBtn);
    li.append(taskNameColumn, taskActionsColumn);
    return li;
}

function createElement(
    element,
    options = { _id: "", classes: "", text: "" }
) {
    const el = document.createElement(element);

    for(const property in options) {
        // console.log("PROPERTY -----> ", property);
        // console.log("PROPERTY VALUE ------> ", options[property]);
        switch(property) {
            case "classes":
                el.classList = options[property];
                break;
            case "_id":
                el.id = options[property];
                break;
            case "text":
                el.textContent = options[property];
                break;
            default:
                console.log("Property not listed.");
                // return "";
        }
    }

    return el;
}

function createCompleteAction(index, isCompleted = false) {
    const form = createElement("form", { classes: "text-center px-2 py-2"});
    const label = createElement("label", { classes: "visually-hidden", text: "Completed"});
    const input = createElement("input");
    input.type = "checkbox";
    let _id;
    if(isCompleted) {
        _id = `taskInputCompleted${index}`;
        input.checked = true;
        input.id = _id;
        label.setAttribute("for", _id);
    } else {
        _id = `taskInput${index}`;
        input.id = _id;
        label.setAttribute("for", _id);
    }
    form.append(label, input);
    return form;
}

function createActionBtn(elClasses, elTitle, elContent) {
    const btnWrapper = createElement("div", { classes: "px-2 py-2"});
    const btn = createElement("btn", {classes: elClasses});
    btn.setAttribute("data-bs-toggle", "tooltip");
    btn.setAttribute("data-bs-title", elTitle);
    btn.setAttribute("type", "button");
    btn.innerHTML = elContent;
    btnWrapper.appendChild(btn);
    return btnWrapper;
}
function moveToCompleted() {
    
}
createTaskTodoItems(tasks);