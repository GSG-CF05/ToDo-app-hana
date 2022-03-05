///access to elements
let todoInput = document.querySelector('.input')
let todoList = document.querySelector('.list')
let addBtn = document.querySelector('.btn')

//add event to the button
addBtn.addEventListener('click' , addToList)
 /////////// create function add
function addToList(e){
    e.preventDefault()
    //check input if empty
    if (todoInput.value === '') {
        alert("No items to add yet ...");
      }else{
  
    //create div
    let todoDiv = document.createElement('div')
    todoList.appendChild(todoDiv)

    // create list
    let newList = document.createElement('li')
    newList.innerText = todoInput.value 
    todoDiv.appendChild(newList)
    
    //create edit button and add class to it 
     let editBtn = document.createElement('button')
     editBtn.innerText="Edit";
     editBtn.className="edit";
    
     //create delete button and add class to it 
     let delBtn = document.createElement('button')
	 delBtn.innerText="Delete";
	 delBtn.className="delete";
	
     //append delete and edit button
	newList.appendChild(editBtn);
	newList.appendChild(delBtn); 

    //call function to store in local storage
    storeData(todoInput.value)
  }
    todoInput.value = '' // empty the list
}

let todoArr = [] 
// store in local storage
function storeData(ele){
    todoArr.push(ele)
    localStorage.setItem('todos',JSON.stringify(todoArr))
}

// access to the delete button ... its not a fixed button
document.addEventListener('click', deleteItem)
///create delete function
function deleteItem(e){
  if(e.target.classList.contains('delete')){
      e.target.parentElement.remove() // delete the parent
  }
     let value = e.target.parentElement.textContent;
     deleteFromStorage(value) // call function to delete from local storage
}
// delete from local storage
function deleteFromStorage(value){
  let tasksToDo = JSON.parse(localStorage.getItem("todos"));
  let index = tasksToDo.indexOf(value);
  tasksToDo.splice(index,1);
  localStorage.setItem("todos", JSON.stringify(tasksToDo));
}


 // Reload code
 window.addEventListener('DOMContentLoaded', Reload)
 function Reload(){
    if(localStorage.getItem('todos')) {  // check the list
        todoArr = JSON.parse(localStorage.getItem('todos'))
     } 
     todoArr.forEach((ele)=> {
        let todoDiv = document.createElement('div')
        todoList.appendChild(todoDiv)
        let newList = document.createElement('li')
        newList.innerText = ele
        todoDiv.appendChild(newList)

    // //RELOAD edit button
    let editBtn = document.createElement('button')
    editBtn.innerText="Edit";
    editBtn.className="edit";
    newList.appendChild(editBtn);
    // //RELOAD delete  button
    let delBtn = document.createElement('button')
    delBtn.innerText="Delete";
    delBtn.className="delete";
    newList.appendChild(delBtn);  
     }) 
    
 } 