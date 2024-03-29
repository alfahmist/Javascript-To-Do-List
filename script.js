const addButton = document.querySelector("#add");
const textInput = document.querySelector("#text");
const containerList = document.querySelector("#container-list");
let list = document.getElementsByClassName("list");

const add = () => {
	// if no text dont run this if
	if (textInput.value != "") {
		// Create list
		const createDiv = document.createElement("div");
		createDiv.className = "list";

		// Create input .textEdit
		const createText = document.createElement("input");
		createText.type = "text";
		createText.value = textInput.value;
		createText.className = "textEdit";

		// Remove Icon
		const createRemove = document.createElement("span");
		createRemove.className = "remove";
		createRemove.setAttribute("onclick", "removeThis(this)");
		createRemove.innerHTML = "X";

		// Append createText and createRemove to CreateDiv
		createDiv.append(createText, createRemove);

		// Append createDiv to containerList
		containerList.appendChild(createDiv);

		// Text reset
		textInput.value = "";
	}
};

const removeButton = () => {
	// remove last list
	list[list.length - 1].remove();
};
const removeThis = (el) => {
	// remove thist element
	el.parentElement.remove();
};
