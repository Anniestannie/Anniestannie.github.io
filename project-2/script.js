document.addEventListener("DOMContentLoaded", function(){
    let camPermission = document.getElementById('startBtn');
    let video = document.getElementById('video');
    let captureBtn = document.getElementById('captureBtn');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d'); 

    camPermission.addEventListener('click', function(){
        navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){
            video.srcObject = stream;
            video.style.display="block";
            captureBtn.style.display = 'inline-block';
            
        });
    });

    captureBtn.addEventListener('click', function() {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    });

    let width = 640;
    let height = 480;

    video.addEventListener("canplay", function(ev) {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            streaming = true;
        }
    }, false);

    function captureImage () {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(video, 0, 0, width, height);
      
        const data = canvas.toDataURL('image/png');
    }
});
