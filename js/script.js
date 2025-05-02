// script.js

document.getElementById('navToggle').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('active');
  });
});

  const toggleButton = document.getElementById('toggle-button');
  const fullContent = document.getElementById('full-content');
  const shortContent = document.getElementById('short-content');

  toggleButton.addEventListener('click', function() {
    if (fullContent.style.display === "none") {
      fullContent.style.display = "block";
      toggleButton.textContent = "See Less";
    } else {
      fullContent.style.display = "none";
      toggleButton.textContent = "See More";
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const taglines = [
      "Standing for Centuries, Rooted in Sacred Tradition — A Beacon of Faith Since 1872 A.D.",
      "From the Quiet Sands of the Egyptian Desert to the Heart of Elamthottam — Preserving the Spirit of St. Antony Through the Ages.",
      "Guided by the Legacy of the Desert Fathers, Our Church Endures as a Testament to Unbroken Faith and Timeless Devotion.",
      "Built on the Foundation of Generations Past, We Uphold the Ancient Call to Prayer, Community, and Grace.",
      "Where History Breathes and Holiness Dwells — Celebrating a Legacy That Began in the Early Days of Monastic Christianity."
    ];
    let current = 0;
    const taglineElement = document.getElementById("tagline");
  
    setInterval(() => {
      taglineElement.style.opacity = 0;
      setTimeout(() => {
        current = (current + 1) % taglines.length;
        taglineElement.textContent = taglines[current];
        taglineElement.style.opacity = 1;
      }, 500);
    }, 4000);
  });

  // Scroll reveal animations
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".scroll-reveal");

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  reveals.forEach(section => {
    observer.observe(section);
  });
});

  

