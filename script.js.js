function loadTasks() {
    document.getElementById('tasks').innerHTML = localStorage.getItem("tasks") || '';
}

function addTask() {
    const task = document.getElementById('task').value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'hataoo yaha se isko';
        removeButton.onclick = function() {
            removeTask(li);
        };
        li.appendChild(removeButton);
        document.getElementById('tasks').appendChild(li);
        localStorage.setItem("tasks", document.getElementById('tasks').innerHTML);
        document.getElementById('task').value = '';
    }
}

function removeTask(taskItem) {
    taskItem.remove();
    localStorage.setItem("tasks", document.getElementById('tasks').innerHTML);
}

loadTasks();