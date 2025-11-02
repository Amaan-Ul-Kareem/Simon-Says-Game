# Simon-Says-Game
A lightweight, browser-based Simon Says memory game created while learning HTML, CSS, and JavaScript. Repeat the flashing color sequence to advance levels, chase your highest score, and test your memory skills.​

Features:
Classic gameplay with randomized color sequences and progressive levels.​

Visual feedback via tile flash animations and a red flash on game over for clear UX cues.​

Highest score tracking displayed in-game to keep sessions competitive and fun.​

Demo:
Open index.html in any modern browser; no build tools required.​

Controls: Press any key to start; click tiles to repeat the sequence in order.​

How it works:
The game generates and stores a sequence of colors, then extends it each level; the player repeats the sequence by clicking.​

Correct full sequences trigger levelUp() and add a new random color; a mismatch triggers game over, red screen flash, and reset.​

UI feedback uses CSS classes like .flash and .redflash for quick, accessible visual state changes.​

File structure:
index.html: Markup and script inclusion; defines the 2x2 color grid and headings.​

style.css: Styles, gradients, hover effects, and animation classes for flash and game-over feedback.​

app.js: Core logic for sequence generation, input handling, level progression, scoring, and resets.​

Getting started:
Download or clone the repository to your local machine.​

Open index.html directly in Chrome, Edge, or Firefox—no server needed for this static setup.​

Development notes:
Built with vanilla JavaScript (no dependencies), ideal for beginners learning DOM events, arrays, and basic game loops.
