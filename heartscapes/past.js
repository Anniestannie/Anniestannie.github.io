let gridContainer = document.querySelector('.grid-container');
let gridItems = document.querySelectorAll('.grid-item');


function adjustGridForScreenSize() {
    const screenWidth = window.innerWidth;
    let maxRows; 

    if (screenWidth < 600) {
        maxRows = 1;  
    } else if (screenWidth < 900) {
        maxRows = 2; 
    } else {
        maxRows = 4; 
    }

    let currentRow = 0;
    for (let i = 0; i < gridItems.length; i++) {
        if (i !== 0 && i % maxRows === 0) {
            currentRow++;
        }
        gridItems[i].style.gridColumn = 'span 1'; 
        gridItems[i].style.gridRow = `${currentRow + 1}`;
    }
}

adjustGridForScreenSize(); 

window.addEventListener('resize', adjustGridForScreenSize);
