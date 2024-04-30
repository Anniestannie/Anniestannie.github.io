import { Application } from '@splinetool/runtime';

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

const canvas = document.getElementById('canvas3d');

const spline = new Application(canvas);
// spline.load('https://prod.spline.design/aQE0zOgRV8XlSncK/scene.splinecode');
spline.load('https://prod.spline.design/g0BE3sezyFtVwOof/scene.splinecode')



let startButton = document.getElementById('startbutton');
let loadingScreen = document.getElementById('loadingscreen');
let loadingTime = 7000;

setTimeout(function() {
    startButton.style.display = 'block'; 
}, loadingTime); 

startButton.addEventListener('click', function() {
    loadingScreen.style.display = 'none';
    instructionScreen.style.display = 'flex'; 

    const popSound = document.getElementById('popSound');
    popSound.volume = 0.3;

    popSound.play();  
});

let instructionScreen = document.getElementById('instructionScreen');
let closeButton = document.getElementById('closeInstructions');

closeButton.addEventListener('click', function() {
   instructionScreen.style.display = 'none';
});

function hideLoadingText() {
  var loadingText = document.querySelector('.loading');
  loadingText.style.visibility = "hidden";
}

setTimeout(hideLoadingText, loadingTime); 
