document.addEventListener("DOMContentLoaded", function() {
    const dates = document.querySelectorAll(".date");
  
    dates.forEach(date => {
      let imageContainer = date.nextElementSibling;
  
      date.addEventListener("mouseover", function() {
        imageContainer.style.display = "block"; // Display the image container
        imageContainer.style.bottom = "50%"; // Slide in to the middle vertically
        imageContainer.style.transform = "translateX(-50%)"; // Center horizontally
      });
  
      date.addEventListener("mouseout", function() {
        // Slide out to the top
        imageContainer.style.bottom = "100%"; 
        setTimeout(() => {
          imageContainer.style.display = "none"; // Hide the image container after sliding out
        }, 500); // Adjust this timeout to match your transition duration
      });
    });
  });
  
