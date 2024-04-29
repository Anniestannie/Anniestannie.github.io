let gridContainer = document.querySelector('.grid-container');
let gridItems = document.querySelectorAll('.grid-item');

function adjustGrid() {
    const maxRows = 2;
    let currentRow = 0;

    for (let i = 0; i < gridItems.length; i++) {
        if (i !== 0 && i % maxRows === 0) { 
            currentRow++;
        }
        gridItems[i].style.gridRow = `${currentRow + 1}`;
    }
}

adjustGrid();

