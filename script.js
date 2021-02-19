var rowNb = prompt("Please enter the number of rows of one side :");


createGrid();

function createGrid() {
  for (i = 0; i < rowNb * rowNb; i++) {
    var container = document.createElement("div");
    container.className = "container";
    myDiv.appendChild(container);
  }
 
  myDiv.style.gridTemplateColumns = 'auto '.repeat(rowNb);
}

function clearGrid() {
  document.querySelectorAll(".container").forEach((div) => {
    div.style.backgroundColor = "transparent";
  });
}

document.querySelectorAll(".container").forEach((div) => {
  div.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
  });
});
