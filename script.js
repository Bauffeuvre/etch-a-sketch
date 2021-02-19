function nbRows() {
    document.querySelectorAll(".container").forEach((div) => {
        document.getElementById("myDiv").innerHTML = ""});
    

        var rowNb = prompt("Please enter the number of rows of one side :");
   	if (rowNb <= 100 && rowNb > 0) {
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
  else {
  	alert("Please enter a number between 0 and 100.")
  }
}



function clearGrid() {
  document.querySelectorAll(".container").forEach((div) => {
    div.style.backgroundColor = "transparent";
  });
}


