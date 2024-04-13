document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the captured photo from sessionStorage
    const capturedPhoto = localStorage.getItem('capturedPhoto');

        
    const previewImage = document.getElementById('preview-image');
    previewImage.src = "data:image/png;base64," + capturedPhoto;
    

    // Add event listener to download button
    const downloadButton = document.getElementById('download-button');
    downloadButton.addEventListener('click', function() {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = capturedPhoto;
        link.download = 'captured_photo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
