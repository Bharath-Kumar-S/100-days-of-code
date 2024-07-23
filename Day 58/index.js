const h1 = document.querySelector("h1");
console.log(h1);
h1.style.color = "red";
h1.style.fontSize = "3rem";
h1.style.textAlign = "center";
h1.style.textTransform = "uppercase";
h1.style.fontWeight = "bold";
h1.style.fontFamily = "Arial";
h1.style.margin = "2rem";
h1.style.padding = "1rem";
h1.style.border = "2px solid black";
h1.style.borderRadius = "1rem";
h1.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
h1.style.backgroundColor = "lightgray";
h1.style.display = "block";
h1.style.width = "fit-content";
h1.style.margin = "0 auto";

const li = document.querySelectorAll("li");

for (let item of li) {
  item.style.color = "green";
  item.style.fontSize = "1.5rem";
  item.style.textTransform = "capitalize";
  item.style.fontWeight = "bold";
  item.style.fontFamily = "Arial";
  item.style.margin = "1rem";
  item.style.padding = "0.5rem";
  item.style.border = "2px solid black";
  item.style.borderRadius = "0.5rem";
  item.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
  item.style.backgroundColor = "lightgray";
  item.style.display = "block";
  item.style.width = "fit-content";
  item.style.margin = "0 auto";
  item.style.listStyleType = "none";
  item.style.textAlign = "center";
  item.style.marginBottom = "1rem";
  item.style.cursor = "pointer";
  item.style.transition = "all 0.3s ease-in-out";
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "lightgreen";
    item.style.transform = "scale(1.1)";
  });
  item.addEventListener("mouseout", function () {
    item.style.backgroundColor = "lightgray";
    item.style.transform = "scale(1)";
  });
}

// create element

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.textContent = "New Item";
ul.appendChild(newLi);
newLi.classList.add("new-item");
newLi.style.color = "red";
//attributes
newLi.setAttribute("id", "new-item");
newLi.getAttribute("id");
newLi.removeAttribute("id");
