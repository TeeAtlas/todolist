// selectors are used to select elements from the html document
const todoInput =  document.querySelector('.todo__wrapper input');
const submitBtn = document.querySelector('#submitBtn');
const listContainer = document.querySelector('#list__container');



// this function is the event listener for the submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevents the default behavior of the submit button

    // create a new list item because the user clicked the submit button
    const newListItem = document.createElement('li');
    
    //set the text of the new list item to the values of the input field
    newListItem.innerText = todoInput.value;


    console.log(todoInput.value);
    // Append the new list item to the list comtainer div
    listContainer.appendChild(newListItem);

    // clear the input field
    todoInput.value = '';

});
submitBtn.addEventListener('click',submitBtn)





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