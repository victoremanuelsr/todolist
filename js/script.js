var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

function renderTodos(){
  listElement.innerHTML = '';
  for(todo of todos){
    var todoElement = document.createElement('li');
    todoElement.setAttribute('class', 'list');
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    var concluir = document.createElement('a')
    var posicao = todos.indexOf(todo);
    var linkText = document.createElement('i');
    var linkConcluir = document.createElement('i');
    linkElement.setAttribute('href', '#');
    concluir.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'deletar('+ posicao +')');
    linkText.setAttribute('class', 'fas fa-trash');
    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(concluir);
    todoElement.appendChild(linkElement);
    
    listElement.appendChild(todoElement);
  }
}
renderTodos();
function adicionarTodo(){
  if(inputElement.value === ''){
    alert('Digite alguma tarefa!');
    return false;
  }else{
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    salvarDados()
  }
}

buttonElement.onclick = adicionarTodo;

function deletar(posicao){
  todos.splice(posicao, 1);
  renderTodos();
  salvarDados();
}


function salvarDados(){
  localStorage.setItem('lista_todos', JSON.stringify(todos));
}
