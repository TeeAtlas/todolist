// selectors are used to select elements from the html document
const addBtn = document.querySelector('#addBtn');
const todoInput =  document.querySelector('.todo__wrapper input');
const listContainer = document.querySelector('#tasks');
const error = document.querySelector('#error');
const countValue = document.querySelector('.count__value');

// initialising variable for task count
let taskCount = 0;

// ass tasks are added deleted or checked off the dispaly count function is defined
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


};



// this function is the event listener for the submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevents the default behavior of the submit button

    // create a new list item because the user clicked the submit button
    const newListItem = document.createElement('li');
    
    //it commands what a new "li" will be // (here we say a new li will be our new child)
    tasks.appendChild(newListItem);
    //set the text of the new list item to the values of the input field ( where this child will be placed and connects the value of the todoinput with newListItem and puts it into HTML(body))
    newListItem.innerHTML = todoInput.value;
    // clear the input field
    todoInput.value = "";



    // Append the new list item to the list comtainer div
    listContainer.appendChild(newListItem);

    

});






//  // create a new delete button
//  const deleteBtn = document.createElement('button');
//  deleteBtn.textContent = 'X';

//  // adding basic styling to button
//  deleteBtn.style.color = 'grey';
//  deleteBtn.style.backgroundColor = 'white';
//  deleteBtn.style.border = '.5px solid grey';
//  deleteBtn.style.borderRadius = '10px';
 

//  // this nested function is the event listener for the delete button
//  deleteBtn.addEventListener('click', function(e){
//      // remove item when delete is clicked
//      listContainer.removeChild(newListItem);
     
//  });

//   //append delete button to the new item
//   newListItem.appendChild(deleteBtn);
