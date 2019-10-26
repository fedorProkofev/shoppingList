// Vars for global scope
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul#sl-list");
let lis = document.querySelectorAll("li.sl-list-item");

// Functions
const inputLength = () => input.value.length;

const createListElement = () => {
	let li = document.createElement("li");
	li.innerHTML = `<span class="sl-list-content">${input.value}</span> <button class="btn btn-sm btn-danger list-button-del">Delete</button>`;
	li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "sl-list-item");
	deleteListElement(li);
	doneListElement(li);
	ul.appendChild(li);
	input.value = "";
}

const doneListElement = (element) => {
	element.querySelector(".sl-list-content").addEventListener("click", function() {
		element.classList.toggle("done");
	});
}

const deleteListElement = (element) => {
	element.querySelector(".list-button-del").addEventListener("click", function() {
		element.remove(element);
	});
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Events
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
for (let element of lis) {
	doneListElement(element);
	deleteListElement(element);
}