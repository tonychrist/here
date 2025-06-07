const meanings = [
  "Human Experience Reserve Earth",
  "Home of Embodied Real Encounters",
  "Hearts Everywhere Remember Everything",
  "Holding Energy. Releasing Everything.",
  "Hidden Empires. Revealed Expressions.",
  "Here Exists Real Ecstasy",
  "Haven for Eternal Rhythms & Echoes",
  "Hackers of Emotional Reality & Experience",
  "Harvesting Every Raw Emotion",
  "Healing, Evolution, Ritual, Embodiment",
  "High Empathy, Real Engagement",
  "Heritage, Expression, Roots, Earth",
  "Honor Every Radical Encounter"
];

const mainWord = document.getElementById("main-word");
const meaningText = document.getElementById("meaning-text");

// Animate intro: h.e.r.e. => meaning
setTimeout(() => {
  const randomMeaning = meanings[Math.floor(Math.random() * meanings.length)];
  mainWord.style.opacity = 0;
  meaningText.textContent = randomMeaning;
  meaningText.style.opacity = 1;
}, 3000);

// Create interactive background grid
const bg = document.getElementById("interactive-bg");
const word = "h.e.r.e.";
const rows = 40;
const cols = 80;

function createGrid() {
  bg.innerHTML = "";
  for (let i = 0; i < rows * cols; i++) {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.position = "absolute";
    span.style.fontSize = "10px";
    span.style.opacity = Math.random();
    bg.appendChild(span);
  }
}

function positionGrid(xFactor, yFactor) {
  const spans = bg.querySelectorAll("span");
  spans.forEach((span, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const x = (col / cols) * window.innerWidth;
    const y = (row / rows) * window.innerHeight;
    span.style.left = \`\${x + xFactor}px\`;
    span.style.top = \`\${y + yFactor}px\`;
  });
}

createGrid();

// Desktop mouse movement
document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const dx = (e.clientX - centerX) * 0.01;
  const dy = (e.clientY - centerY) * 0.01;
  positionGrid(dx, dy);
});

// Mobile: touch to cycle meanings
let meaningIndex = 0;
document.body.addEventListener("touchstart", () => {
  meaningIndex = (meaningIndex + 1) % meanings.length;
  mainWord.style.opacity = 0;
  meaningText.textContent = meanings[meaningIndex];
  meaningText.style.opacity = 1;
});

// Mobile: device tilt motion
window.addEventListener("deviceorientation", (event) => {
  const gamma = event.gamma || 0;  // left-right
  const beta = event.beta || 0;    // front-back
  const xShift = gamma * 0.5;
  const yShift = beta * 0.5;
  positionGrid(xShift, yShift);
});
