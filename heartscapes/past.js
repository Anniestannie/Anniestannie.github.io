updateTime();
function updateTime() {

    let today = new Date();
    
    let thisMonth = today.getMonth();
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let thisDate = today.getDate();
    
    let thisYear = today.getFullYear();
    
    let dateElement = document.getElementById("dateHere");
    
    dateElement.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;
    
    let thisHour = today.getHours() % 12;
    let thisMinute = today.getMinutes();
    let thisSecond = today.getSeconds();
      
    if(thisMinute < 10)
      thisMinute = "0" + thisMinute;
      
    if(thisSecond < 10) 
      thisSecond = "0" + thisSecond;

    let timeElement = document.getElementById("timeHere");
    
    timeElement.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;
}
    
setInterval(updateTime, 1000);

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

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startbutton");

    const loadingScreen = document.getElementById("loadingscreen");

    startButton.addEventListener("click", function() {
        loadingScreen.style.display = "none";
    });
});