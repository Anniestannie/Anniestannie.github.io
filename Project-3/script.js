let riceCookerImg = document.getElementById("cooker-state");
let steamImg = document.getElementById("steam");

let imgClosed = './public/RICECOOKERCLOSED-11.png';
let imgOpenWithRice = './public/RICECOOKEROPENEDFULL-03.png';
let imgSteam = './public/SSS.png';

let isOpen = false;

function updateRiceCooker(){
    let now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    if (minutes === 30 && seconds === 0 && !isOpen) { 
        riceCookerImg.src = imgOpenWithRice;
        isOpen = true;

        setTimeout(function() {
            riceCookerImg.src = imgClosed;
            isOpen = false;
        }, 10000); 
    } else if ((minutes < 30 || minutes >= 31) && isOpen) { 
        riceCookerImg.src = imgClosed;
        isOpen = false;
    }



    if (seconds % 2 === 0) {
        steamImg.style.transform = 'scaleX(1)'; 
        steamImg.style.display = 'block';
    } else {
        steamImg.style.transform = 'scaleX(-1)';
        steamImg.style.display = 'block'; 
    }
}

updateRiceCooker();

setInterval(updateRiceCooker, 1000); 

let bowlImages = {
    empty: './public/RICEBOWLEMPTY-05-2.png',
    full: './public/RICEBOWLFULL-07.png'
};

let bowlElements = [
    document.getElementById('bowl1'),
    document.getElementById('bowl2'),
    document.getElementById('bowl3'),
    document.getElementById('bowl4'),
    document.getElementById('bowl5'),
    document.getElementById('bowl6'),
    document.getElementById('bowl7'),
    document.getElementById('bowl8'),
    document.getElementById('bowl9'),
    document.getElementById('bowl10'),
    document.getElementById('bowl11'),
    document.getElementById('bowl12'),
    document.getElementById('bowl13'),
    document.getElementById('bowl14'),
    document.getElementById('bowl15'),
    document.getElementById('bowl16'),
    document.getElementById('bowl17'),
    document.getElementById('bowl18'),
    document.getElementById('bowl19'),
    document.getElementById('bowl20'),
    document.getElementById('bowl21'),
    document.getElementById('bowl22'),
    document.getElementById('bowl23'),
    document.getElementById('bowl24')
];

function updateRiceBowls() {
    let now = new Date();
    let easternTime = new Date(now.toLocaleString('en-US', {timeZone: 'America/New_York'})); 
    let hour = easternTime.getHours();
    let minute = easternTime.getMinutes();
  
    bowlElements.forEach(bowl => bowl.src = bowlImages.empty); 
    
    for (let i = 0; i < hour; i++) { 
        bowlElements[i].src = bowlImages.full; 
    }
      
    if (minute >= 30) { 
        bowlElements[hour - 1].src = bowlImages.full; 
    }
}

updateRiceBowls();

  
  