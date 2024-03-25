document.addEventListener("DOMContentLoaded", function() {
  const dates = document.querySelectorAll(".date");

  dates.forEach(date => {
    let imageContainer = date.nextElementSibling;

    date.addEventListener("click", function() {
      // Toggle the display of the image container
      if (imageContainer.style.display === "block") {
        // If the image container is already displayed, hide it
        imageContainer.style.display = "none";
      } else {
        // If the image container is hidden, display it
        imageContainer.style.display = "block";
        imageContainer.style.bottom = "50%"; // Slide in to the middle vertically
        imageContainer.style.transform = "translateX(-50%)"; // Center horizontally
        imageContainer.style.opacity = "1"; // Reset opacity when clicking
      }
    });

    imageContainer.addEventListener("click", function() {
      // Slide out to the top and decrease opacity when clicking on the image
      imageContainer.style.bottom = "100%";
      imageContainer.style.opacity = "0"; // Decrease opacity as it slides away
      setTimeout(() => {
        imageContainer.style.display = "none"; // Hide the image container after sliding out
      }, 500); // Adjust this timeout to match your transition duration
    });
  });
});
