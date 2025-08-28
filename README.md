# Interactive Web Animations

A sleek, interactive web UI with **dynamic project images, scroll-based text reveal, and 3D tilting cards**. Perfect for portfolios or personal projects to make your webpage feel alive.

---

## ✨ Features

### 🚀 Project Image Flip
- Automatic flipping images in `.project-right` sections  
- Supports multiple images via `data-images` attribute  
- Staggered timing for smooth, continuous animation  

### 👀 Reveal Text on Scroll
- Paragraph text in `.aboutDesc` reveals word by word when scrolled into view  
- Words reset when scrolling away for repeated animations  

### 🃏 3D Tilt Certificate Cards
- `.cert-card` elements tilt based on mouse movement  
- Adds depth and interactive scaling effect  
- Smooth reset on mouse leave  

---

## 💻 Usage
1. Clone or download the repo  
2. Add your `.project-right` images:
<div class="project-right" data-images="img1.jpg, img2.jpg, img3.jpg">
  <img class="flip-image" src="" alt="Project Image">
</div>

3. Wrap paragraph text in .aboutDesc for scroll reveal
4. Add .cert-card elements to enable 3D tilt effect
5. Open index.html in a browser

## ⚡ Tech Stack

- HTML
- CSS (Animations & Transforms)
- JavaScript (DOM, Events, Intervals)
  

## 🎯 Why This Project

* Makes your portfolio visually engaging
* Demonstrates smooth, modern UI interactions
* Lightweight, no heavy libraries required
