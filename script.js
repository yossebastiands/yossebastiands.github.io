// Typing Effect
const text = "Automating the boring, visualizing what matters.";
const typewriterEl = document.getElementById("typewriter");
let index = 0;

function type() {
  if (index < text.length) {
    typewriterEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 40); // typing speed
  }
}
window.addEventListener("DOMContentLoaded", type);

// Fade-in Hero Title on Load
window.addEventListener("load", () => {
  document.querySelector("h1").classList.add("visible");
});
