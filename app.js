// selectors are used to select elements from the html document
const todoInput =  document.querySelector('.row__inputField input');
const submitBtn = document.querySelector('#submitBtn');
const listContainer = document.querySelector('#list__container');

// this function is the event listener for the submit button

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevents the default behavior of the submit button

    // create a new list item because the user clicked the submit button
    const newListItem = document.createElement('li');
    
    //set the text of the new list item to the values of the input field
    newListItem.textContent = todoInput.value;
    
    console.log(todoInput.value);
    // Append the new list item to the list comtainer div
    listContainer.appendChild(newListItem);

    // clear the input field
    todoInput.value = '';

});
