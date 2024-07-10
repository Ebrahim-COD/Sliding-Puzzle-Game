/*-------------- Constants -------------*/

let correctedTile = [1,2,3,4,5,6,7,8,""]  //array if we get this we will win the game

/*---------- Variables (state) ---------*/

let tile = [1,2,3,4,5,6,7,8,""] // array for our tiles
let time 
let puzzleWon = false
let gameStarted = false

/*----- Cached Element References  -----*/

const bdTile = document.querySelectorAll(".boardTile")     // calling all the boardtile tiles
const lastMessage = document.querySelector(".lastMessage") // message for our win
const resetButton = document.querySelector("#resetBtn") // calling the reset button
const timerBtn = document.querySelector("#timeB") // calling the timer button
const timeMessage = document.querySelector("#timeM") // Timer message

/*-------------- Functions -------------*/

function shuffleNumbers(array) {

  array.sort(() => Math.random() - 0.5) // generates a random number between 0 and 1. by subtracting 0.5 we get the before or itself or after the random number.
  if(!solvaBle(array)) {       // if its not solvable shuffle the array again
    shuffleNumbers(array)
  }
}

function inversionNumber(array) {        // functions calculate the numbers of inversion in an array(inversion is part of elements)

  let inversionCount = 0                    
  for(let i = 0; i<array.length;i++) {          // loops through each element of the array from start to end.
    for(let j=i+1; j < array.length;j++) {      // looping elements that come after the current element i 
      if (array[i] > array[j]                   // Compare the current element with the element J that comes after it
        && array[i] != ""                       // element i is not empty string
        && array[j] != "") {                    // element j is not empty string
        inversionCount++                        // if element i is greater than element j then count it as inversion
      }
    }
  }
  return inversionCount  //return the total count of inversions found
}

function solvaBle(array) {                             
  let inversionCount = inversionNumber(array)         //Number of the inversion count is even > solvable otherwise odd > not solable
  return inversionCount % 2 === 0
}

function init() {
  shuffleNumbers(tile);   
  render();  
}

function updateBoard() {   //
  bdTile.forEach((key, index) => {    
      key.innerHTML = tile[index]   // set the tile[value] to the bdTile which is .boardTile
  })
}

function render() {
  updateBoard();
  if (puzzleWon) {
    lastMessage.textContent = "Congratulations! You solved the puzzle! 👏";
    lastMessage.style.display = "block";
  }
}

function handleClick(event) {

  if(puzzleWon) {  //if the game is won then stop the game.
       return
  }

  if(timeMessage.textContent.includes("Game Over!")) {  // If the game is over stop the game.
       return
  }

  const clickTile = event.target
  const clickedGrid = [...bdTile].indexOf(clickTile);  
  const emptyGrid = tile.indexOf("")

  if(moveTiles(clickedGrid, emptyGrid)) {
      swapNumbers(tile , clickedGrid, emptyGrid)
      updateBoard()
        if(checkforWinner()) {
            puzzleWon = true
            clearInterval(time) //stop the timer
            render() //render the win message
        }
    }
}

function moveTiles(clickedGrid, emptyGrid) {  // Move the clicked grid to the empty grid
    switch (clickedGrid) {
      case 0:
        return emptyGrid === 1 || emptyGrid === 3  // Possible moves is either index 0 & 3
      case 1:
        return emptyGrid === 0 || emptyGrid === 4 || emptyGrid === 2 //Possible moves is either index 0 , 4, 2
      case 2:
        return emptyGrid === 1 || emptyGrid === 5 //Possible moves is either index 1,5
      case 3:
        return emptyGrid === 0 || emptyGrid === 4 || emptyGrid === 6 
      case 4:
        return emptyGrid === 1 || emptyGrid === 3 || emptyGrid === 5 || emptyGrid === 7 
      case 5:
        return emptyGrid === 2 || emptyGrid === 4 || emptyGrid === 8 
      case 6:
        return emptyGrid === 3 || emptyGrid === 7 
      case 7:
        return emptyGrid === 6 || emptyGrid === 4 || emptyGrid === 8 
      case 8:
        return emptyGrid === 5 || emptyGrid === 7 
    }
  return false  // return false as a fallback
}

  
function swapNumbers(tile, clickedGrid, emptyGrid) {
    const swap = tile[clickedGrid]      //Remember the number at tile position clickedGrid in the array tile
    tile[clickedGrid] = tile[emptyGrid] // Replace the number at position clickedGrid with the number position emptyGrid
    tile[emptyGrid] = swap              // Replace the number at position emptyGrid with the number that was originally at position clickedGrid
}

function checkforWinner() {
    let winner = true

    tile.forEach((key, index) => {
        if(key != correctedTile[index]) { //If the tile is not same as the corrected Tile then false
            winner = false
        } 
        
    })
    return winner
}

function resetBtn(){    

    tile = [1, 2, 3, 4, 5, 6, 7, 8, ""]
    puzzleWon = false;
    clearInterval(time);
    timeMessage.textContent = ""
    lastMessage.style.display = "none"
    timerBtn.disabled = false

    shuffleNumbers(tile);  // Reshuffle tiles and update board
    updateBoard();  //update the board
}

function timer(){

  shuffleNumbers(tile);
  updateBoard()

  let sec = 60 

  time = setInterval(() => {   //set up a timer that runs every second
    timeMessage.innerHTML = '00:'+sec  //update the message to show the second
    timeMessage.style.display = "block"  

    if (sec === 0) {
      clearInterval(time) //stop the timer
      timeMessage.textContent = "Game Over! 😵‍💫"
      timeMessage.style.display = "block"
      } else {
       sec-- //decrease the value  of sec by 1
        }
  },1000) // Run the timer function every 1 sec (1000 milliseconds)

  timerBtn.disabled = true; // Disable timer button until reset
}

/*----------- Event Listeners ----------*/

bdTile.forEach(key => {
    key.addEventListener('click', handleClick)   
})

resetButton.addEventListener('click' , resetBtn)
timerBtn.addEventListener('click',timer)

init()
