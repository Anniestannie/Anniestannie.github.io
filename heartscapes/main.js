import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');

const spline = new Application(canvas);
// spline.load('https://prod.spline.design/aQE0zOgRV8XlSncK/scene.splinecode');
spline.load('https://prod.spline.design/ZNEYJmC5Grii19k8/scene.splinecode')

function updateTime() {

    let today = new Date();
    
    let thisMonth = today.getMonth();
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let thisDate = today.getDate();
    let thisWeekday = today.getDay();
    
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
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

let startButton = document.getElementById('startbutton');
let loadingScreen = document.getElementById('loadingscreen');
    

setTimeout(function() {
    startButton.style.display = 'block'; 
}); 

startButton.addEventListener('click', function() {
    loadingScreen.style.display = 'none';
});

let instructionScreen = document.getElementById('instructionScreen');
let closeButton = document.getElementById('closeInstructions');

loadingScreen.addEventListener('click', function() { 
   loadingScreen.style.display = 'none';
   instructionScreen.style.display = 'flex'; 
});

closeButton.addEventListener('click', function() {
   instructionScreen.style.display = 'none';
});



function hideLoadingText() {
  const loadingText = document.querySelector('.loading');
  loadingText.style.display = 'none';
}


setTimeout(hideLoadingText, 5000); 
