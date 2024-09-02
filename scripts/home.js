const home = document.querySelector("#home");
home.innerHTML = `
<div class="home-section">
    <div class="hero-shape">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
    </div>
    <div class="title">
        <h1>Front-end <span></span>|</h1>
    </div>
    <div class="description">
        <p>
            Hi, I'm <u>Shailesh Solanke</u>. A passionate Front-end Developer based in Pune, India.
        </p>
    </div>
    <div class="links">
        <a href="https://www.linkedin.com/in/shaileshsolanke/">
            <img src="./assets/icons/linkedin.svg" alt="linkedin-icon" />
        </a>
        <a href="https://github.com/shaileshSolanke/" target="_blank">
            <img src="./assets/icons/github.svg" alt="github-icon" />
        </a>
    </div>
</div>
`;

const dynamicText = document.querySelector(".home-section h1 span");
const words = ["Developer", "React Developer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
    dynamicText.classList.add("stop-blinking");
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();
