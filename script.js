
// TO CHANGE
// ADD RGB - RAINBOW COLOR FEATURE
// ADD SLIDER AND FIX THE PIXEL THING

const gridContainer = document.getElementById("gridContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridCell");

let currentMode = "color"


let currentGridSize = prompt("Enter Grid Size")
window.onload = () => createGrid(currentGridSize);


let colorModeBtn = document.getElementById("colorModeBtn");
let eraserModeBtn = document.getElementById("eraserModeBtn");
let clearBtn = document.getElementById("clearBtn");


colorModeBtn.onclick = () => currentMode = "color";
eraserModeBtn.onclick = () => currentMode = "eraser";
clearBtn.addEventListener("click", reloadGrid);


function reloadGrid() {

    gridContainer.innerHTML = " ";
    createGrid(currentGridSize);
}






function createGrid(size) {

    makeRows(size);
    makeCells(size);
}


function makeRows(size) {
    for (r = 0; r < size; r++) {
        let row = document.createElement("div");
        gridContainer.appendChild(row).className = "gridRow";
    }
}

function makeCells(size) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < size; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "gridCell";
            newCell.addEventListener("mouseover", changeColor);
            // newCell.addEventListener("mouseout", resetColor);

        }
    }


}


function changeColor(e) {
    if (currentMode == "color")
        e.target.style.backgroundColor = "#fe3a00";
    else if (currentMode == "eraser")
        e.target.style.backgroundColor = "#ffffff";
}
