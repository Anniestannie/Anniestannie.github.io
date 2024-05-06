import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');

const spline = new Application(canvas);

spline.load('https://prod.spline.design/bPu6K5VTdBOsNCjo/scene.splinecode');

let startButton = document.getElementById('startbutton');
let loadingScreen = document.getElementById('loadingscreen');
let loadingTime = 3000;

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
