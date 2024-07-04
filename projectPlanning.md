# Bingo Game

### **User Stories:**

* As a player, I would like a randomized grid of numbers on my Bingo card so I can participate in the game.
* As a player, I want the ability to mark off called numbers on my Bingo card to keep track of my progress.
* As a player, I aim to be notified when I achieve a winning pattern (such as a line or Colored tile) in order to claim Bingo.
* As a player, I desire to engage in multiple rounds of Bingo to continue my enjoyment of the game.

### **Pseudo-Code:**

1. Start by setting up the bingo game:
    * Generate a Bingo card with random numbers.
    * Present the Bingo card to the player.
2. Begin the game process:
    * Randomly select a number between 1 and 25.
    * Check if the number is already called (marked).
    * If not called, mark the number on the player's Bingo card.
    * Check if any winning conditions (e.g., a line) are met on the Bingo card.
3. Check for winning conditions:
    * Vertical lines.
    * Horizontal lines.
    * Diagonal lines.
4. Declare Bingo if a winning condition is met:
    * End the current round of the game.
5. End the game loop:
    * Ask the player if they want to play another round.
