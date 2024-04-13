let video = document.getElementById('webcam-video');
let canvas = document.getElementById('photo-canvas');
let takePhotoButton = document.getElementById('take-photo');
let saturationControl = document.getElementById('cam-saturation');
let cuteFilterControl = document.getElementById('cute-filter');
let cuteFilterImageContainer = document.getElementById('cute-filter-image-container');

let cuteFilters = [
    './assets/cat1.png',
    './assets/cat2.png',
    './assets/cat3.png',
    './assets/cat4.png',
    './assets/cat5.png',
    './assets/cat6.png',
];

function updateCuteFilterImage() {
    let filterIndex = parseInt(cuteFilterControl.value);
    let filterImageSrc = cuteFilters[filterIndex];
    cuteFilterImageContainer.src = filterImageSrc;
}

cuteFilterControl.addEventListener('input', updateCuteFilterImage);



navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing webcam", error);
    });


takePhotoButton.addEventListener('click', function () {
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    ctx.filter = `saturate(${saturationControl.value})`;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.filter = 'none';

    if (overlayImage.style.opacity > 0) {
        ctx.globalAlpha = overlayImage.style.opacity;
        ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
    }

    let cuteFilterIndex = parseInt(cuteFilterControl.value);

     if (cuteFilterIndex > 0) {
    let cuteFilterImage = new Image();
    cuteFilterImage.src = cuteFilters[cuteFilterIndex];
    cuteFilterImage.onload = function() {
      let x = (canvas.width - cuteFilterImage.width) / 2;
      let y = (canvas.height - cuteFilterImage.height) / 2;
      ctx.drawImage(cuteFilterImage, x, y);
    };
  }

    let numberOfStickers = stickersControl.value;
    for (let i = 0; i < numberOfStickers; i++) {
        displayRandomSticker(); 
    }

    const imageDataURL = canvas.toDataURL('image/png'); 
    const imageData = imageDataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    localStorage.setItem('capturedPhoto', imageData); 
    

    window.location.href = './news.html'; 
});


saturationControl.addEventListener('input', () => {
    video.style.filter = `saturate(${saturationControl.value})`;
});


let overlayImage = document.getElementById ('overlay-image');
let opacityControl = document.getElementById('overlay-opacity');
opacityControl.addEventListener('input', () => {
    let opacity = opacityControl.value / 100;
    overlayImage.style.opacity = opacity;
    if (opacity > 0) {
        overlayImage.style.display = 'block';
        overlayImage.style.zIndex = 1; 
    } else {
        overlayImage.style.display = 'none';
    }

    
});



let stickersControl = document.getElementById('stickers');
let stickersImages = ['./assets/stickers.ai-15.png',
'./assets/stickers.ai-12.png',
'./assets/stickers.ai-16.png',
'./assets/stickers.ai-13.png',
'./assets/stickers.ai-14.png',
'./assets/stickers.ai-17.png',
'./assets/stickers.ai-18.png',
'./assets/stickers.ai-19.png',
'./assets/stickers.ai-20.png',];

let MAXIMUM_STICKERS = 20;

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

        let stickerWidth = stickerImage.width * 0.5; 
        let stickerHeight = stickerImage.height * 0.5;


        let x = Math.random() * (canvas.width - stickerImage.width);
        let y = Math.random() * (canvas.height - stickerImage.height);

        ctx.drawImage(stickerImage, x, y, stickerWidth, stickerHeight);
    };
}


function clearStickers() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

