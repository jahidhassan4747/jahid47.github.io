//==== MY_TUTOR JavaScript==== 
// Contact button alert
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".contac-bottom");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("Thank you! We’ll get in touch with you soon.");
    });
  }
});
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
// Highlight header when scrolling
window.addEventListener("scroll", () => {
  const header = document.querySelector(".jock-box");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#111";
  } else {
    header.style.backgroundColor = "#333";
  }
});
