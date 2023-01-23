const inputValue = document.getElementById('inputValue');
const inputSubmit = document.getElementById('inputSubmit');
const TodoList = document.getElementById('TodoList');


function makeTodo(event){
    event.preventDefault();
    const ul= document.createElement('ul');
    const li = document.createElement('li');
    const spanX = document.createElement('button');
    const span = document.createElement('button');

    const value = inputValue.value;
    li.innerText = value;
    inputValue.value = "";
    TodoList.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(spanX);
    li.appendChild(span);
    span.innerText = "수정";
    span.id = 'editButton';

    span.addEventListener('click', modifyTodo);
    spanX.innerText = "X";
    spanX.addEventListener('click', deleteTodo);

    
}

function deleteTodo(event){
    li = event.target.parentElement;
    li.remove();
}

function modifyTodo(event){
    li = event.target.parentElement;
    li.contentEditable = true;
    button = event.target.innerText = "저장";
    const saveButton = event.target;
    saveButton.addEventListener('click', saveComment);
    
}


function saveComment(event){
    const edit = event.target;
    edit.innerText = "수정";
    li = event.target.parentElement;
    li.contentEditable = false;
    edit.removeEventListener('click', saveComment);
    edit.addEventListener('click', modifyTodo);
    
    // console.log(li.lastChild;
    
}
    


inputSubmit.addEventListener('click',makeTodo )