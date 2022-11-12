{
    let tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvent = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += ` 
        <li class="list__items">
            <button class="list__button list__button--done js-done">${task.done ? "&#10004" : ""}</button>
            <span ${task.done ? "style=\"text-decoration: line-through\"" : ""}>${task.content}</span>
            <button class="list__button--delete js-remove">🗑</button>
        </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvent();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}