// selectors are used to select elements from the html document
const addBtn = document.querySelector('#addBtn');
const todoInput =  document.querySelector('.todo__wrapper input');
const listContainer = document.querySelector('#tasks');
const error = document.querySelector('#error');
const countValue = document.querySelector('.count__value');

// initialising variable for task count
let taskCount = 0;

// as tasks are added, deleted or checked off the display count function is defined
const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
};

// add task button is defined when add button is clicked
const addTask = () => {
    const taskName = todoInput.value.trim();
    error.style.display = "none"; 
    if (!taskName) {
        // checks if empty or contains only whitespace chars
        setTimeout(() => {
            error.style.display = "block";
        }, 200); 
        
        return;
    }

    // declared as an html string stored in the task variable
    const task = `<div class="task">
     <input type="checkbox" class="task-check">
     <span class="taskname">${taskName}</span>
     <button class="edit">
     <i class="fa-regular fa-pen-to-square"></i>
     </button>
     <button class="delete">
     <i class="fa-regular fa-trash-can"></i>
     </button>
    </div>`;

    listContainer.insertAdjacentHTML("beforeend", task);
};

addBtn.addEventListener("click", addTask);