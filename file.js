// You can add JavaScript functionality here if needed
// Get all the sections
const sections = document.querySelectorAll('.section');

// Function to handle mouseover event
function handleMouseOver() {
  this.style.transform = 'scale(1.05)'; // Scale up on hover
}

// Function to handle mouseout event
function handleMouseOut() {
  this.style.transform = 'scale(1)'; // Return to normal size on mouse out
}

// Loop through sections and attach event listeners
sections.forEach((section) => {
  section.addEventListener('mouseover', handleMouseOver);
  section.addEventListener('mouseout', handleMouseOut);
});
