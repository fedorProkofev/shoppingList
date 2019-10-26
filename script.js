var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul#sl-list");
var lis = document.querySelectorAll("li.sl-list-item");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.innerHTML = "<span class=\"sl-list-content\">" + input.value + "</span> <button class=\"btn btn-sm btn-danger list-button-del\">Delete</button>";
	li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "sl-list-item");
	deleteListElement(li);
	doneListElement(li);
	ul.appendChild(li);
	input.value = "";
}

function doneListElement(element) {
	element.querySelector(".sl-list-content").addEventListener("click", function() {
		element.classList.toggle("done");
	});
}

function deleteListElement(element) {
	element.querySelector(".list-button-del").addEventListener("click", function() {
		element.remove(element);
	});
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(function(element) {
	doneListElement(element);
	deleteListElement(element);
});