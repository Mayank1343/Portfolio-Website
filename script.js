/*const bee = document.getElementById("bee");
const buzz = new Audio("buzz.mp3"); // Replace with your actual sound file path

let isDead = false;

// Get random screen edge position
function getRandomEdgePosition() {
  const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
  const width = window.innerWidth;
  const height = window.innerHeight;

  switch (side) {
    case 0: return { x: Math.random() * width, y: -100 }; // top
    case 1: return { x: width + 100, y: Math.random() * height }; // right
    case 2: return { x: Math.random() * width, y: height + 100 }; // bottom
    case 3: return { x: -100, y: Math.random() * height }; // left
  }
}

// Move bee to random position with smooth animation
function moveBee() {
  if (isDead) return;

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  // Calculate angle for natural rotation
  const rect = bee.getBoundingClientRect();
  const dx = x - rect.left;
  const dy = y - rect.top;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

 bee.style.transition = "transform 4s linear, left 4s linear, top 4s linear";
  bee.style.transform = `rotate(${angle}deg)`;
  bee.style.left = `${x}px`;
  bee.style.top = `${y}px`;

  setTimeout(moveBee, 4500);
}

// Start bee from edge
function spawnBee() {
  const { x, y } = getRandomEdgePosition();
  bee.style.left = `${x}px`;
  bee.style.top = `${y}px`;
  bee.style.opacity = "1";
  isDead = false;
  moveBee();
}

// On click – kill the bee
bee.addEventListener("click", () => {
  if (isDead) return;
  isDead = true;

  buzz.currentTime = 0;
  buzz.play();

  bee.classList.add("bee-dead");

  setTimeout(() => {
    bee.classList.remove("bee-dead");
    bee.style.opacity = "1";
    bee.style.transform = "rotate(0deg)";

    const { x, y } = getRandomEdgePosition();
    bee.style.left = `${x}px`;
    bee.style.top = `${y}px`;

    setTimeout(moveBee, 1000);
    isDead = false;
  }, 5000);
});

// Initial start
spawnBee();

*/

/*
// TYPEWRITER EFFECT

  var typed= new Typed(".change-text",{
    strings: ["Full Stack Developer!","Software Engineer!","Cloud Engineer!","DevOps Engineer!"],
  typeSpeed: 70, 
  backSpeed: 50,
  loop: true,
  showCursor: false
  })
  */


document.addEventListener("DOMContentLoaded", () => {
  function setupFlipAnimationForProjectRight(container) {
    const imagesAttr = container.getAttribute("data-images");
    if (!imagesAttr) return;

    const images = imagesAttr.split(",").map(img => img.trim());
    const flipImages = container.querySelectorAll(".flip-image");

    flipImages.forEach((img, idx) => {
      let currentIndex = idx % images.length;
      img.src = images[currentIndex];

      setInterval(() => {
        img.classList.add("flip");

        setTimeout(() => {
          currentIndex = (currentIndex + 1) % images.length;
          img.src = images[currentIndex];
          img.classList.remove("flip");
        }, 300);
      }, 3000 + idx * 500);
    });
  }

  // Find all .project-right containers and initialize flip animation
  const projectRights = document.querySelectorAll(".project-right");
  projectRights.forEach(container => setupFlipAnimationForProjectRight(container));
});








  