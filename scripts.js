 // Model
            
 let todos = [];
 render();

 // Creates a todo
 function createTodo(title , dueDate){
     const id = '' + new Date().getTime();
     todos.push({
         title: title,
         dueDate: dueDate,
         id: id
     });

 }
 // Deletes a todo
 function removeTodo(idToDelete){
     todos = todos.filter(function(todo){
         if(todo.id===idToDelete){
             return false;
         } else {
             return true;
         }
         });

 }

 //Controller
 function addTodo(){
     const textbox = document.getElementById('todo-title');
     const title = textbox.value;
     const datePicker = document.getElementById('date-picker');
     const dueDate = datePicker.value;
     createTodo(title , dueDate);
     render();
 }

 function deleteTodo(event){
     const deleteButton = event.target;
     const idToDelete= deleteButton.id;
     removeTodo(idToDelete);

     
     render();
 
 }
 //View
 function render(){
     // reset our list
     document.getElementById('todo-list').innerHTML='';
     todos.forEach(function(todo){
         const element= document.createElement('div');
         element.innerText= todo.title;
         element.style.display="grid";
         element.style.gridTemplateColumns="6fr 2fr 4fr";
         element.style.justifyContent='center';
         element.style.alignItems='center';
         
         element.style.gap='2px';
         const date= document.createElement('button');
         date.innerText= todo.dueDate;
         element.appendChild(date);
         const deleteButton= document.createElement('button');
         deleteButton.innerText = 'Delete';
         deleteButton.style='cursor:pointer';
         deleteButton.style.color='white';
         deleteButton.onclick=deleteTodo;
         deleteButton.id=todo.id;
         element.appendChild(deleteButton);
         const todoList = document.getElementById('todo-list');
         todoList.appendChild(element); 
         deleteButton.style.backgroundColor='rgba(2, 83, 149, 0.979)';
         deleteButton.style.marginLeft='140px'; 
         deleteButton.style.borderStyle='none';
         deleteButton.style.borderRadius='5px';
         deleteButton.style.width="100px";
         deleteButton.style.height="30px";
         date.style.marginLeft='140px'; 
         date.style.borderStyle='none';
         date.style.width="100px";
         date.style.height="30px";
         date.style.backgroundColor='white';
         
         
             
     });
 }