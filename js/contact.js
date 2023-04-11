// GLOBAL SCOPE
let tasks;
window.onload = () => {
    if(sessionStorage.getItem("tasks")) {
        // sessionStorage.removeItem("tasks");
        // sessionStorage.clear();
        tasks = JSON.parse(sessionStorage.getItem("tasks"));
    } else {
        sessionStorage.setItem("tasks", JSON.stringify([]));
        tasks = JSON.parse(sessionStorage.getItem("tasks"));
    }
    // LOCAL SCOPE
    console.log("Create task javascript file invoked")
    const createTaskForm = document.getElementById("createTaskForm");
    console.log(createTaskForm);
    createTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("FORM SUBMITTED");
        const title = createTaskForm["taskTitle"].value;
        const completedBy = createTaskForm["completedBy"].value;

        

        const newTask = {
            // title: title,
            title,
            // completedB: completedBy,
            completedBy,
            isCompleted: false
        }
        tasks.push(newTask);
        sessionStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("SESSION STORAGE DATA: ", JSON.parse(sessionStorage.getItem("tasks")));
    });
}


