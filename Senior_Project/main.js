import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');

const spline = new Application(canvas);
// spline.load('https://prod.spline.design/aQE0zOgRV8XlSncK/scene.splinecode');

spline.load('https://prod.spline.design/aQE0zOgRV8XlSncK/scene.splinecode')



function updateTime() {

    let today = new Date();
    
    let thisMonth = today.getMonth();
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let thisDate = today.getDate();
    
    let thisWeekday = today.getDay();
    
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    console.log(weekdays[thisWeekday]);
    
    let thisYear = today.getFullYear();
    console.log(thisYear);
    
    let dateElement = document.getElementById("dateHere");
    
    dateElement.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;
    
    let thisHour = today.getHours();
    
    let thisMinute = today.getMinutes();
    
    let thisSecond = today.getSeconds();
    console.log(thisSecond);
      
    if(thisHour > 12) {
      thisHour = thisHour - 12
    }
      
    if(thisMinute < 10) {
      thisMinute = "0" + thisMinute;
    }
      
    if(thisSecond < 10) {
      thisSecond = "0" + thisSecond;
    }
      
    let timeElement = document.getElementById("timeHere");
    
    timeElement.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;
    }
    
    setInterval(updateTime, 1000);



let startButton = document.getElementById('startbutton');
let loadingScreen = document.getElementById('loadingscreen');
    

    setTimeout(function() {
      startButton.style.display = 'block'; 
    }, ); 
    
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