// MoveText.js
// JavaScript code for moving text animation

// Get the text element
const textElement = document.getElementById('moving-text');

// Set the initial position of the text
let angle = 0;
let radius = 150;
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

// Animate the text position in a circular path
anime({
  targets: textElement,
  translateX: [
    {
      value: () => centerX + Math.cos(angle) * radius,
      duration: 2000,
      easing: 'linear',
    },
  ],
  translateY: [
    {
      value: () => centerY + Math.sin(angle) * radius,
      duration: 2000,
      easing: 'linear',
    },
  ],
  update: () => {
    angle += 0.01; // Adjust the speed of rotation here
  },
  complete: () => {
    // Restart the animation when it completes
    anime.restart();
  },
});

// Start the animation
anime();
