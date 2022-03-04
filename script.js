////////////////////////add task////////////////////////////
let todoInput = document.querySelector('.input')
let todoList = document.querySelector('.list')
let addBtn = document.querySelector('.btn')

//add event to the button
addBtn.addEventListener('click' , addToList)

function addToList(e){
    e.preventDefault()
    //create div
    let todoDiv = document.createElement('div')
    todoList.appendChild(todoDiv)

    // create list
    let newList = document.createElement('li')
    newList.innerText = todoInput.value 
    todoDiv.appendChild(newList)
    
    //create delete and edit button
     let editBtn = document.createElement('button')
     let delBtn = document.createElement('button')
     // append every element and add class name 
    editBtn.innerText="Edit";
	editBtn.className="edit";
	delBtn.innerText="Delete";
	delBtn.className="delete";
	
	newList.appendChild(editBtn);
	newList.appendChild(delBtn); 

    //call function to store in local storage
    storeData(todoInput.value)
    todoInput.value = '' // empty the list
   
}

let todoArr = [] 
// store in local storage
function storeData(ele){
    todoArr.push(ele)
    localStorage.setItem('todoArr',JSON.stringify(todoArr))
}
 // Reload code
 window.addEventListener('DOMContentLoaded', Reload)
 function Reload(){
    if(localStorage.getItem('todoArr')) {  // check the list
        todoArr = JSON.parse(localStorage.getItem('todoArr'))
     } 
     todoArr.forEach((ele)=> {
        let todoDiv = document.createElement('div')
        todoList.appendChild(todoDiv)
        let newList = document.createElement('li')
        newList.innerText = ele
        todoDiv.appendChild(newList)
     })
 } 