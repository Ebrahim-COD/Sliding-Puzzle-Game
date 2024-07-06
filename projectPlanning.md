# Sliding Puzzle Game

### **User Stories:**

* As a player, I would like to view a grid of tiles that form the puzzle.
* As a player, I would like the ability to slide tiles into the empty space to change their positions.
* As a player, I want to know when I have solved the puzzle.
* As a player, I want to have a way to reset the puzzle to its initial state.
* As a player, I want to have a timer so I know I have to finish the puzzle within the given time, otherwise, I will lose.

### **Pseudo-Code:**

1. Initialize the puzzle:
    * Create an array that represents the puzzle board.
    * Update the grid based on the array.
2. Shuffle the puzzle
    * Randomly shuffle the array.
    * Update the grid with the shuffled array.
3. Drag events on tiles:
    * Identify the position of the clicked tile and the position of the empty space.
    * Check if the tile can move into the empty space.
4. Move tiles
    * Swap the clicked/dragged tile with the empty space in the array.
    * Update array after each valid move.
5. Check for puzzle completion
    * Compare the current array with the corrected array.
    * If they match, display a completed message.
6. Handle user interactions
    * Attach event listeners to tiles for click.
    * Call appropriate functions to handle tile movements and puzzle updates
