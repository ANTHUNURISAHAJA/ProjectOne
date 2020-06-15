var button = document.getElementById("click");
var input = document.getElementById("testing");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');


deleteNode();

function addTheInput(){
	if(input.value.length>0){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var deleteButton = document.createElement("i");
	deleteButton.classList.add("fa","fa-trash");
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
	deleteNode();
}
}

function deleteNode(){
	var delButton = document.querySelectorAll("i");
	for(var node=0;node<delButton.length;node++)
	{
		delButton[node].addEventListener("click",removeNode);
	}
}

function removeNode(){

		this.parentNode.remove()
	
}
function strikeEvent(e){
	if(e.target.tagName==="LI")
		e.target.classList.toggle("done");
}


button.addEventListener("click", addTheInput);

ul.addEventListener("click",strikeEvent);
