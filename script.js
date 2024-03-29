const addButton = document.querySelector("#add");
const textInput = document.querySelector("#text");
const containerList = document.querySelector("#container-list");
let list = document.getElementsByClassName("list");

const add = () => {
	if (textInput.value != "") {
		const createDiv = document.createElement("div");
		const createText = document.createElement("p");
		const createRemove = document.createElement("span");
		createDiv.className = "list";
		createRemove.classList = "remove";
		createRemove.setAttribute("onclick", "removeThis(this)");
		createText.innerHTML = textInput.value;
		createRemove.innerHTML = "X";
		createDiv.append(createText, createRemove);
		containerList.appendChild(createDiv);
		// textInput.value = "";
	}
};

const removeButton = () => {
	list[list.length - 1].remove();
};
const removeThis = (el) => {
	el.parentElement.remove();
};
