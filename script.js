
// TO CHANGE
// ADD SLIDER AND FIX THE PIXEL THING




const gridContainer = document.getElementById("gridContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridCell");
let colorPicker = document.getElementById("colorPicker");
let gridSlider = document.getElementById("gridSlider");
let currentColor = "#333333";


let currentMode = "color";

let currentGridSize = 20;
window.onload = () => createGrid(currentGridSize);


let colorModeBtn = document.getElementById("colorModeBtn");
let eraserModeBtn = document.getElementById("eraserModeBtn");
let rainbowModeBtn = document.getElementById("rainbowModeBtn");
let clearBtn = document.getElementById("clearBtn");

colorModeBtn.onclick = () => currentMode = "color";
eraserModeBtn.onclick = () => currentMode = "eraser";
rainbowModeBtn.onclick = () => currentMode = "rainbow";
clearBtn.addEventListener("click", reloadGrid);
colorPicker.onchange = (e) => setCurrentColor(e.target.value);
// gridSlider.onmousemove = (e) => currentGridSize = e.target.value;
gridSlider.onchange = (e) => updateGridSize(e.target.value);

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function reloadGrid() {
    gridContainer.innerHTML = " ";
    createGrid(currentGridSize);
}


function updateGridSize(value) {
    setCurrentSize(value);
    reloadGrid();
}

function setCurrentSize(newSize) {
    currentGridSize = newSize;
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

        }
    }
}


function changeColor(e) {
    if (currentMode == "color")
        e.target.style.backgroundColor = currentColor;
    else if (currentMode == "eraser")
        e.target.style.backgroundColor = "#ffffff";
    else if (currentMode == "rainbow") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }

}
