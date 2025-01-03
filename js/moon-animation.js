// Initialize Canvas
const canvas = document.getElementById('spotlightCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

// Draw spotlight at mouse position
function drawSpotlight(x, y) {
  // Clear the previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set up radial gradient
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, 500);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
  gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.35)');
  gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.2)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
  gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.1)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

  // Draw the spotlight effect
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Track mouse movement
document.addEventListener('mousemove', (event) => {
  drawSpotlight(event.clientX, event.clientY);
});

// Resize canvas if the window size changes
window.addEventListener('resize', resizeCanvas);
