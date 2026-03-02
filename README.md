# Tic Tac Toe – Classic Game

Tic Tac Toe is an interactive two-player classic board game built using **HTML, CSS, and JavaScript**.  
This project showcases DOM manipulation, event handling, and effective game logic structuring without any frontend frameworks.

Players alternate turns marking the board, and the game automatically evaluates wins, draws, and resets.

---

## Live Demo

🔗 **Live Application:** https://tic-tac-toe-654.netlify.app/  
🔗 **GitHub Repository:** https://github.com/Equationeer/Tic-Tac-Toe

---

## Key Features

- Two-player UI with alternating turns (X and O)  
- Auto winner detection after every move  
- Draw detection when the board fills with no win  
- Game restart functionality  
- Visual winning line & status display  
- Responsive and clean game UI  
- Built using pure JavaScript without frameworks

---

## Project Architecture

The project follows a clean and organized structure focusing on modularity and simplicity.

- Game state managed using JavaScript logic  
- DOM selections and event listeners for user interactions  
- CSS styling for grid layout and visual feedback  
- HTML structure for game board and controls

---

## Project Structure

```text
Tic-Tac-Toe/
│
├── index.html           → Main markup for game UI
├── style.css            → Styles, layout, and visual design
├── app.js               → Game logic and interaction handling
└── README.md            → Project documentation
```
## Tech Stack

| Category             | Technology Used |
|----------------------|----------------|
| Markup Language      | HTML5          |
| Styling              | CSS3           |
| Programming Language | JavaScript (ES6+) |
| Version Control      | Git & GitHub   |

---

## Getting Started

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Equationeer/Tic-Tac-Toe.git
cd Tic-Tac-Toe
```

### 2️⃣ Open in Browser

You can directly open the `index.html` in your browser.

Or if you use VS Code, launch with Live Server:

```
Live Server → index.html
```

---

## How the Game Works

- The board has **9 clickable cells** indexed 0–8.
- Players take turns placing **X** and **O**.
- After every move, the game checks all possible winning combinations:

```js
[
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
]
```

- If a player completes a winning combo, the game announces the winner.
- If all cells fill up with no winner, the game shows a draw.
- Reset button clears the board and starts a new game.

---

## Example Code Snippet

### Winner Check Logic (JavaScript):

```js
const winCombinations = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function checkWinner(board) {
  return winCombinations.some(combo => {
    return (
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    );
  });
}
```

---

## Future Enhancements

To take this further, you can add:

- AI Single Player Mode (Minimax logic)
- Scoreboard tracker
- Animations & sound effects
- More responsive UI for mobile
- Dark/Light mode toggle
- Player name inputs

---

## Learning Takeaways

By building this game, I improved my understanding of:

- JavaScript event handling
- Dynamic DOM updates
- Game state logic
- Clean structuring of frontend code
- Separation of concerns (HTML/CSS/JS)

---

## ❤️ Thank You

Feel free to ⭐️ the repository if you like it!  
Made with 💻 + ❤️

