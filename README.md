# You vs Computer — Game

A quick, lightweight browser game where you play against the computer. Built with **HTML + CSS + JavaScript** and deployed on **Netlify**.

🔗 **Live demo:** https://you-vs-computer-game.netlify.app/

## ✨ Features
- **Instant results**: see who wins each round in real time.
- **Computer AI**: random choices via `Math.random()` for fair play.
- **Scoreboard & reset**: running score, clear “Play again” control.
- **Responsive UI**: touch-friendly buttons and clean layout on mobile/desktop.
- **Accessible**: keyboard focus states, ARIA labels where needed.

## 🧰 Tech Stack
- **HTML5** for structure  
- **CSS3** (Flex/Grid/variables) for layout & theming  
- **JavaScript (ES6+)** for game logic and state  
- **Netlify** for hosting

## 🧪 How it works (example logic)
```js
// Example: rock–paper–scissors style
const choices = ['rock', 'paper', 'scissors'];

function cpuPick(){
  return choices[Math.floor(Math.random() * choices.length)];
}

function decide(player, cpu){
  if (player === cpu) return 'draw';
  if (
    (player === 'rock' && cpu === 'scissors') ||
    (player === 'paper' && cpu === 'rock') ||
    (player === 'scissors' && cpu === 'paper')
  ) return 'player';
  return 'cpu';
}
🚀 Run locally
bash
Copy code
git clone https://github.com/YOUR_USER/you-vs-computer-game.git
cd you-vs-computer-game
# Open index.html in your browser
# or run a simple static server:
# npx serve .
