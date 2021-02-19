function nbRows() {
    document.querySelectorAll(".container").forEach((div) => {
        document.getElementById("myDiv").innerHTML = ""});
    
        var rowNb = prompt("Please enter the number of rows of one side :");
    for (i = 0; i < rowNb * rowNb; i++) {
        var container = document.createElement("div");
        container.className = "container";
        myDiv.appendChild(container);
      }
      document.querySelectorAll(".container").forEach((div) => {
        div.addEventListener("mouseover", (event) => {
          event.target.style.backgroundColor = "blue";
        });
      });

      myDiv.style.gridTemplateColumns = 'auto '.repeat(rowNb);
}



function clearGrid() {
  document.querySelectorAll(".container").forEach((div) => {
    div.style.backgroundColor = "transparent";
  });
}


