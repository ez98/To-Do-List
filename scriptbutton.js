var userInput = document.getElementById("user-input");
var button = document.getElementById("enter");
var listItem = document.querySelector("UL");
var li = document.querySelector("LI");
var deleteButtons = document.getElementsByClassName("delete");
function inputLength(){
	//this function returns the length of the string that the user inputted
	return userInput.value.length;
}
function addtoList(){
	//this function creates a new Li element, adds user input as a text node to the li and appends to the ul parent
	var tag = document.createElement("LI"); //create a new Li tag
	var button = document.createElement("BUTTON");
	var div = document.createElement("DIV");
	div.className = "delete-button";
	button.className = "btn delete btn-lg btn-dark"; //adds bootstrap button
	tag.className = "puff-in-center";
	button.appendChild(document.createTextNode(" delete "));
	div.appendChild(button);
	tag.appendChild(document.createTextNode(userInput.value)); //create a text node for that tag
	tag.appendChild(div);
	listItem.appendChild(tag); //add that tag with the text into our element
	userInput.value = ""; //resets input field
	


	//Delete list item.
	
	
	button.onclick = removeParent;
	listItem.onclick = listIndex;
}
function addAfterClick(){
	//if user inputs a string, then addtoList function executes and adds to list
	if (inputLength() > 0){
		addtoList();
	}
}
function addAfterKeyPress(event){
	//this func is when the user presses enter, and addtoList executes
	if (inputLength() > 0 && event.keyCode === 13){
		addtoList();
	}
}
// function doneOnClick(i){
// 	//this func toggles the "done" class on the specified "i" list element
// 	listItem.children[i].classList.toggle("done");
// }
function listIndex(){
	//this func retrieves the index location of the list element that was clicked on and then uses
	//that index location to execute deleteOnClick(indexlocation or i) 
	for (let i = 0; i < listItem.children.length; i++){
	    listItem.children[i].onclick = function(){
	    	if (listItem.children.length > 0){
	    		this.classList.toggle("done");
	    	}
	    }
	}
}
function removeParent(evt){ 
	evt.target.parentNode.parentNode.remove();
}

button.addEventListener("click",addAfterClick);
userInput.addEventListener("keypress",addAfterKeyPress);