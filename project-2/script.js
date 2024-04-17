let video = document.getElementById('webcam-video');
let canvas = document.getElementById('photo-canvas');
let stickersControl = document.getElementById('stickers');
let stickerOverlay = document.getElementById('sticker-overlay');
let saturationControl = document.getElementById('cam-saturation');



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



let stickersImages = ['./assets/stickers.ai-15.png',
'./assets/stickers.ai-12.png',
'./assets/stickers.ai-16.png',
'./assets/stickers.ai-13.png',
'./assets/stickers.ai-14.png',
'./assets/stickers.ai-17.png',
'./assets/stickers.ai-18.png',
'./assets/stickers.ai-19.png',
'./assets/stickers.ai-20.png',];

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


let overlayImages = [
    './assets/photooverlays-01.png',
    './assets/photooverlays-02.png',
    './assets/photooverlays-03.png',
    './assets/photooverlays-04.png',
    './assets/photooverlays-05.png',
    './assets/photooverlays-06.png',
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

let animeEyesImages = [
    './assets/AnimeEyes-03.png',
    './assets/AnimeEyes-04.png',
    './assets/AnimeEyes-05.png',
    './assets/AnimeEyes-06.png',
    './assets/AnimeEyes-07.png',
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

let accessoriesImages = [
    './assets/accessories-01.png',
    './assets/accessories-02.png',
    './assets/accessories-08.png',
    './assets/accessories-09.png',
    './assets/accessories-10.png',
    './assets/accessories-11.png',
    './assets/accessories-12.png',
    './assets/accessories-13.png',
    './assets/accessories-14.png',
   
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

let blushImages = [
    './assets/blush-15.png',
    './assets/blush-16.png',
    './assets/blush-17.png',
    './assets/blush-18.png',
    
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

