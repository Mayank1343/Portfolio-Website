
  // PROJECT SECTION FLIP IMAGES
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




//REVEAL ON SCROLL
document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector(".aboutDesc p");
    const words = paragraph.innerText.trim().split(/\s+/);

    paragraph.innerHTML = words
        .map(word => `
            <span class="word">
                <span class="ghost">${word}</span>
                <span class="reveal">${word}</span>
            </span>
        `)
        .join(" ");

    const wordElements = paragraph.querySelectorAll(".word");

    function handleScroll() {
        const rect = paragraph.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            wordElements.forEach((word, index) => {
                setTimeout(() => {
                    word.classList.add("fade-in");
                }, index * 50);
            });
        } else {
            wordElements.forEach(word => {
                word.classList.remove("fade-in");
            });
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});


//CERTI CARDS
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;  // mouse X inside card
        const y = e.clientY - rect.top;   // mouse Y inside card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (smaller number = less tilt)
        const rotateX = ((y - centerY) / centerY) * 12; // tilt up/down
        const rotateY = ((x - centerX) / centerX) * 10; // tilt left/right

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0) scale(1)'; // reset
    });
});









  