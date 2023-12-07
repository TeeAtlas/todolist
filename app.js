// selectors are used to select elements from the html document
const addBtn = document.querySelector('#addBtn');
const todoInput =  document.querySelector('#todo__wrapper-input');
const listContainer = document.querySelector('#tasks');
const error = document.querySelector('#error');
const countValue = document.querySelector('.count__value');



// add task button is defined when add button is clicked




const renderListItem = (string) => {
        // create a new list item because the user clicked the submit button
        const newListItem = document.createElement('li');

        //it gives a new "li" a class  ---> gotta adjust liStyling in css part
        newListItem.classList.add("li__Styling");
        
        //set the text of the new list item to the values of the input field ( where this child will be placed and connects the value of the todoinput with newListItem and puts it into HTML(body))
        newListItem.innerHTML = string;
        


        
        // create a new delete button
        const deleteBtn = document.createElement('button');
        //class name for styling
        deleteBtn.className = "delete__btn";
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        
        //nested function is the event listener for the delete button
        // and updates the local storage memory with json stringify
        deleteBtn.addEventListener('click', (e) => {
            let todosArray = JSON.parse(localStorage.getItem('localStorageToDos'));
            // filter the array of todos to remove the todo that was clicked
            arrayOfTodos = todosArray.filter((todo) => todo.title !== string);
            // set the array of todos to local storage
            localStorage.setItem('localStorageToDos', JSON.stringify(arrayOfTodos));
            listContainer.removeChild(newListItem)
        });
        
        //append delete button to the new item
        newListItem.appendChild(deleteBtn);
        

        // Append the new list item to the list comtainer div
        listContainer.appendChild(newListItem);
        
       
}


//which is set to the local storage memory in the add to storage function yhi
if(localStorage.getItem('localStorageToDos')){
    const todosArray = JSON.parse(localStorage.getItem('localStorageToDos'))

    todosArray.forEach(element => renderListItem(element.title))
}




// this function is the event listener for the todo input field
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevents the default behavior of the submit button


    // if the input field is empty, .trim method removes whitespace from both sides of a string prevents the user from adding an empty todo
        if (todoInput.value.trim() == "") {
        error.style.display = "block"; 
        setTimeout(() => {
            error.style.display = "none";
        } , 2000);
            return;
        }
    
    // if(todoInput.value.trim() == ""){
    //     alert("You must write a task in the input")
    //     return
    // }

    // add a todo to the ul
    renderListItem(todoInput.value)
    
    // adds it to the localstorage memory
    addToLocalStorage(todoInput.value)
    
    todoInput.value = ""; // clear the input field
});




const addToLocalStorage = (string) => {
    const ms = new Date()
    const id = Math.floor(Math.random() * 10000 * ms.getMilliseconds())
    console.log(ms, id)

    // create a new object with the new todo and a unique id
    let newTodo = {
        title: string,
        isDone: false,
        id: id
    }

    // get the todos that are already in local storage
    let arrayOfTodos = []  

    // if there are todos in local storage, get them and stringify them
    if(localStorage.getItem('localStorageToDos')){
        arrayOfTodos = JSON.parse(localStorage.getItem('localStorageToDos'))
    }
    
    // add the new todo string the array
    arrayOfTodos.push(newTodo)

    // set the array of todos to local storage
    localStorage.setItem('localStorageToDos', JSON.stringify(arrayOfTodos))
}


//  // create a new delete button
//  const deleteBtn = document.createElement('button');
//  deleteBtn.textContent = 'X';

//  // adding basic styling to button
//  deleteBtn.style.color = 'grey';
//  deleteBtn.style.backgroundColor = 'white';
//  deleteBtn.style.border = '.5px solid grey';
//  deleteBtn.style.borderRadius = '10px';


 // this nested function is the event listener for the delete button
 deleteBtn.addEventListener('click', function(e){
     // remove item when delete is clicked
     listContainer.removeChild(newListItem);

 });

  //append delete button to the new item
  newListItem.appendChild(deleteBtn);




// // initialising variable for task count
// let taskCount = 0;

// // as tasks are added, deleted or checked off the display count function is defined
// const displayCount = (taskCount) => {
//     countValue.innerText = taskCount;
// };




    // declared as an html string stored in the task variable
// const task = `<div class="task">
//      <input type="checkbox" class="task-check">
//      <span class="taskname">${taskName}</span>
//      <button class="edit">
//      <i class="fa-regular fa-pen-to-square"></i>
//      </button>
//      <button class="delete">
//      <i class="fa-regular fa-trash-can"></i>
//      </button>
//     </div>`;

//     listContainer.insertAdjacentHTML("beforeend", task);
// };




// Enrique's adding a new task way
// const renderTask = (todo) => {
//     const li = document.createElement('li');
//     li.id = todo.id;
//     li.innerHTML = 
//         <input type="checkbox" class="task-check">
//           <span class="taskname">${taskName}</span>
//           <button class="edit">
//           <i class="fa-regular fa-pen-to-square"></i>
//           </button>
//           <button class="delete">
//           <i class="fa-regular fa-trash-can"></i>
//           </button>
//         </input>;
//         listContainer.appendChild(li);
// }