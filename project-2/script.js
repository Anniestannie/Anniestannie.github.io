let video = document.getElementById('webcam-video');
let canvas = document.getElementById('photo-canvas');
let stickersControl = document.getElementById('stickers');
let stickerOverlay = document.getElementById('sticker-overlay');
let saturationControl = document.getElementById('cam-saturation');

import stickers1 from "./assets/stickers.ai-15.png";
import stickers2 from "./assets/stickers.ai-12.png";
import stickers3 from "./assets/stickers.ai-16.png";
import stickers4 from "./assets/stickers.ai-13.png";
import stickers5 from "./assets/stickers.ai-14.png";
import stickers6 from "./assets/stickers.ai-17.png";
import stickers7 from "./assets/stickers.ai-18.png";
import stickers8 from "./assets/stickers.ai-19.png";
import stickers9 from "./assets/stickers.ai-20.png";

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing webcam", error);
    });


saturationControl.addEventListener('input', () => {
    video.style.filter = `saturate(${saturationControl.value})`;
});



let stickersImages = [
    stickers1, stickers2, stickers3, stickers4, stickers5, stickers6, stickers7, stickers8, stickers9,
];

let MAXIMUM_STICKERS = 50;

stickersControl.addEventListener('input', () => {
    const numberOfStickers = stickersControl.value;

    clearStickers(); 

    for (let i = 0; i < numberOfStickers; i++) {
        displayRandomSticker();
    }
});
function displayRandomSticker() {
    let stickerIndex = Math.floor(Math.random() * stickersImages.length);
    const stickerImage = new Image(); 
    stickerImage.src = stickersImages[stickerIndex];

    stickerImage.onload = () => {
        let ctx = canvas.getContext('2d'); 

      
        let scaleWidth = Math.random() * 0.5 + 0.5; 
        let scaleHeight = Math.random() * 0.5 + 0.5;
        

        let stickerWidth = stickerImage.width * scaleWidth; 
        let stickerHeight = stickerImage.height * scaleHeight;

        let x = Math.random() * (canvas.width - stickerWidth);
        let y = Math.random() * (canvas.height - stickerHeight);

        ctx.drawImage(stickerImage, x, y, stickerWidth, stickerHeight);
    };
}



function clearStickers() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


let photooverlayImage = document.getElementById('photo-overlay');
let overlayRange = document.getElementById('overlay-range');


import overlayImage1 from "./assets/photooverlays-01.png";
import overlayImage2 from "./assets/photooverlays-02.png";
import overlayImage3 from "./assets/photooverlays-03.png";
import overlayImage4 from "./assets/photooverlays-04.png";
import overlayImage5 from "./assets/photooverlays-05.png";
import overlayImage6 from "./assets/photooverlays-06.png";

let overlayImages = [
    overlayImage1,
    overlayImage2,
    overlayImage3,
    overlayImage4,
    overlayImage5,
    overlayImage6,
];

function updateOverlayImage() {
    let index = overlayRange.value; 

    if (index == 0) {
        photooverlayImage.style.display = 'none'; 
    } else {
        photooverlayImage.style.display = 'block'; 
        photooverlayImage.src = overlayImages[index - 1]; 
    }
}

overlayRange.addEventListener('input', updateOverlayImage);

let animeEyesImage = document.getElementById('anime-eyes-image');
let animeEyesRange = document.getElementById('anime-eyes-range');

import eyes1 from "./assets/AnimeEyes-03.png";
import eyes2 from "./assets/AnimeEyes-04.png";
import eyes3 from "./assets/AnimeEyes-05.png";
import eyes4 from "./assets/AnimeEyes-06.png";
import eyes5 from "./assets/AnimeEyes-07.png";

let animeEyesImages = [
   eyes1,
   eyes2,
   eyes3,
   eyes4,
   eyes5
];

function updateAnimeEyesImage() {
    let index = animeEyesRange.value;
    if (index == 0) {
        animeEyesImage.style.display = 'none'; 
    } else {
        animeEyesImage.style.display = 'block'; 
        animeEyesImage.src = animeEyesImages[index - 1];
    }

}

animeEyesRange.addEventListener('input', updateAnimeEyesImage);

let accessoriesImage = document.getElementById('accessories-image');
let accessoriesRange = document.getElementById('Accessories-range');

import accessories1 from "./assets/accessories-01.png";
import accessories2 from "./assets/accessories-02.png";
import accessories3 from "./assets/accessories-08.png";
import accessories4 from "./assets/accessories-09.png";
import accessories5 from "./assets/accessories-10.png";
import accessories6 from "./assets/accessories-11.png";
import accessories7 from "./assets/accessories-12.png";
import accessories8 from "./assets/accessories-13.png";

let accessoriesImages = [
  accessories1, accessories2,accessories3, accessories4, accessories5, accessories6, accessories7, accessories8,
];

function updateAccessoriesImage() {
    let index = accessoriesRange.value;

 
    if (index == 0) {
        accessoriesImage.style.display = 'none'; 
    } else {
        accessoriesImage.style.display = 'block';
        accessoriesImage.src = accessoriesImages[index - 1]; 
    }
}

accessoriesRange.addEventListener('input', updateAccessoriesImage);

let blushImage = document.getElementById('blush-image');
let blushRange = document.getElementById('blush-range');

import blush1 from "./assets/blush-15.png";
import blush2 from "./assets/blush-16.png";
import blush3 from "./assets/blush-17.png";
import blush4 from "./assets/blush-18.png";

let blushImages = [
   blush1, blush2, blush3, blush4
];

function updateBlushImage() {
    let index = blushRange.value;

    if (index == 0) {
        blushImage.style.display = 'none'; 
    } else {
        blushImage.style.display = 'block'; 
        blushImage.src = blushImages[index - 1]; 
    }
}

blushRange.addEventListener('input', updateBlushImage);


let closeButton = document.querySelector('.close-button');
let reminderContainer = document.querySelector('.reminder-container');

closeButton.addEventListener('click', () => {
    reminderContainer.style.display = 'none'; 
});

let closeButtonTwo = document.querySelector('.close-button-two');
let filterControls = document.querySelector('.filter-controls');

closeButtonTwo.addEventListener('click', () => {
    filterControls.style.display = 'none';
});

