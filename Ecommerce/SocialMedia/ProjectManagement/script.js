let projects = [];
let tasks = [];

// Create Project
function createProject() {

    let name = document.getElementById("projectName").value.trim();

    if (name === "") {
        alert("Please enter project name!");
        return;
    }

    projects.push(name);

    displayProjects();

    document.getElementById("projectName").value = "";
}


// Display Projects
function displayProjects() {

    let projectBox = document.getElementById("projects");

    projectBox.innerHTML = "";

    projects.forEach(function(project) {

        let div = document.createElement("div");

        div.className = "project";

        div.innerHTML = "📁 <strong>" + project + "</strong>";

        projectBox.appendChild(div);
    });
}


// Add Task
function addTask() {

    let taskName =
        document.getElementById("taskName").value.trim();

    let user =
        document.getElementById("assignedUser").value.trim();

    if (taskName === "" || user === "") {
        alert("Please enter task and user!");
        return;
    }

    tasks.push({
        name: taskName,
        user: user,
        completed: false,
        comments: []
    });

    displayTasks();

    document.getElementById("taskName").value = "";
    document.getElementById("assignedUser").value = "";
}


// Display Tasks
function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let div = document.createElement("div");

        div.className = "task";

        div.innerHTML = `
            <h3>📝 ${task.name}</h3>

            <p>👤 Assigned to: ${task.user}</p>

            <button class="complete"
                    onclick="completeTask(${index})">
                ${task.completed ? "Completed ✅" : "Complete Task"}
            </button>

            <div class="comment">
                <input type="text"
                       id="comment-${index}"
                       placeholder="Add a comment">

                <button onclick="addComment(${index})">
                    💬 Comment
                </button>
            </div>

            <div id="comments-${index}"></div>
        `;

        taskList.appendChild(div);

        displayComments(index);
    });
}


// Complete Task
function completeTask(index) {

    tasks[index].completed = true;

    displayTasks();
}


// Add Comment
function addComment(index) {

    let input =
        document.getElementById("comment-" + index);

    let comment = input.value.trim();

    if (comment === "") {
        alert("Please enter a comment!");
        return;
    }

    tasks[index].comments.push(comment);

    input.value = "";

    displayTasks();
}


// Display Comments
function displayComments(index) {

    let box =
        document.getElementById("comments-" + index);

    if (!box) {
        return;
    }

    box.innerHTML = "";

    tasks[index].comments.forEach(function(comment) {

        let p = document.createElement("p");

        p.innerText = "💬 " + comment;

        box.appendChild(p);
    });
}