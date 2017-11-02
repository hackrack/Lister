var list = document.querySelector("ul");
var submit = document.getElementById("addnew");
var input = document.getElementById("todoitem");
var saver = document.getElementById("save")
var remover = document.getElementById("removedone");

submit.addEventListener('click', function(){
  var newItem = document.createElement("li");
  newItem.innerHTML = input.value;
  if (input.value.length >= 1) {
    list.appendChild(newItem);
  }
})
document.addEventListener("click", function(event) {
  if (event.target.nodeName === "LI") {
    event.target.style.textDecoration = "line-through";
  }
})
remover.addEventListener("click", function() {
  var arr = document.querySelectorAll("li");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].style.textDecoration === "line-through") {
      arr[i].remove();
    }
  }
})
saver.addEventListener("click", function() {
  window.localStorage.setItem("list", list.innerHTML);
})
