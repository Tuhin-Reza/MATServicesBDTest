const logo1 = document.querySelector('.logo1');
const text1 = document.querySelector('.text1');
const logo2 = document.querySelector('.logo2');
const text2 = document.querySelector('.text2');
const logo3 = document.querySelector('.logo3');
const text3 = document.querySelector('.text3');

// Variable to keep track of the current visible part (1, 2, or 3)
let currentPart = 1;

// Function to toggle the visibility between three parts
function toggleVisibility() {
    // Hide all logos and text containers
    logo1.style.display = 'none';
    text1.style.display = 'none';
    logo2.style.display = 'none';
    text2.style.display = 'none';
    logo3.style.display = 'none';
    text3.style.display = 'none';

    // Show the current part based on the counter
    if (currentPart === 1) {
        logo1.style.display = 'inline-block';
        text1.style.display = 'flex'; // Change to 'flex' for consistent styling
    } else if (currentPart === 2) {
        logo2.style.display = 'inline-block';
        text2.style.display = 'flex'; // Change to 'flex' for consistent styling
    } else {
        logo3.style.display = 'inline-block';
        text3.style.display = 'flex'; // Change to 'flex' for consistent styling
    }

    // Update the current part counter
    currentPart = (currentPart % 3) + 1; // Cycle through 1, 2, 3
}

// Set an interval to toggle visibility every 7 seconds (7000ms)
setInterval(toggleVisibility, 7000);

// Initial call to set the first part visible
toggleVisibility();
