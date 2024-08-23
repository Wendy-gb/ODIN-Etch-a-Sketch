const container = document.getElementById('container');
const gridSize = 16;
const squareSize = 960 / gridSize;

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width =`${squareSize}px`;
        square.style.height = `${squareSize}px`; 
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);

    } 
}

function changeColor(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;

}

createGrid();