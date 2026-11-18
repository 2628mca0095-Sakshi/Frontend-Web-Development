function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Create checkbox
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    // Create task text
    let span = document.createElement("span");

    span.innerText = task;

    // Create status
    let status = document.createElement("small");

    status.innerText = "Pending";

    // Checkbox functionality
    checkbox.onclick = function() {

        if (checkbox.checked) {

            span.classList.add("completed");

            status.innerText = "Completed";

        } else {

            span.classList.remove("completed");

            status.innerText = "Pending";

        }

    };

    // Create delete button
    let btn = document.createElement("button");

    btn.innerText = "Delete";

    btn.className = "delete";

    // Delete functionality
    btn.onclick = function() {

        li.remove();

    };

    // Add elements to list item
    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(status);

    li.appendChild(btn);

    // Display task
    document.getElementById("taskList").appendChild(li);

    // Clear input
    input.value = "";

}

// Add task using Enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        addTask();

    }

});