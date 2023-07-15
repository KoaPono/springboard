//1
const containerSection = document.getElementById("container");

//2
const containerSectionQuery = document.querySelector("section");

//3
const secondListItems = document.getElementsByClassName("second");

//4
const orderedListItem = document.querySelector("ol")
const thirdOrderedItem = orderedListItem.lastElementChild;

//5
const pElement = document.createElement("p");
pElement.textContent = "Hello!";
containerSection.append(pElement);

//6
const footerDiv = document.getElementsByClassName("footer")[0];
footerDiv.classList.add("main");

//7
footerDiv.classList.remove("main");

//8
const newLi = document.createElement("li");

//9
newLi.innerText = "four";

//10
const unorderedListItem = document.querySelector("ul");
unorderedListItem.append(newLi);

//11
for (let listItem of orderedListItem.children) {
    listItem.style.backgroundColor = "green";
}

//12
footerDiv.remove();