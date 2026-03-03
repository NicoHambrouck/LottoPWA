var container = document.getElementById("list");




function addToDo(){
    var todo = document.getElementById("newTodo").value;
    var li = document.createElement("li"); // crée un <li>
    li.textContent = todo;                 // met le texte dedans

    container.appendChild(li); 
}
