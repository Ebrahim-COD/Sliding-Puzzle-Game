/*-------------- Constants -------------*/
let correctedTile = [1,2,3,4,5,6,7,8,""]  //array if we get this we will win the game
let time 
let puzzleWon = false
/*---------- Variables (state) ---------*/
let tile = [1,2,3,4,5,6,7,8,""] // array for our tiles



/*----- Cached Element References  -----*/
const bdTile = document.querySelectorAll(".boardTile")     // calling all the boardtile tiles
const lastMessage = document.querySelector(".lastMessage") // message for our win
const resetButton = document.querySelector("#resetBtn") // calling the reset button
const timerBtn = document.querySelector("#timeB") // calling the timer button
const timeMessage = document.querySelector("#timeM") // Timer message

/*-------------- Functions -------------*/
function shuffleNumbers(array) {

    array.sort(() => Math.random() - 0.5) //shuffle the array using sorting 0.5
    array.forEach(key => {
      for(let i = 0; i<array.length;i++) {
        for(let j; j < array.length;j++) {

        }
      }
    })
}

function updateBoard() {   //
  bdTile.forEach((key, index) => {
      key.innerHTML = tile[index]
  })
}

function handleClick(event) {

    if(puzzleWon) {  //If the game is won then stop the game.
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
            lastMessage.textContent = "Congratulations! You solved the puzzle! 👏"
            lastMessage.style.display = "block"
            clearInterval(time) //stop the timer
        }
    }
}

function moveTiles(clickedGrid, emptyGrid) {  // Move the clicked tile with the empty tile
    switch (clickedGrid) {
      case 0:
        return emptyGrid === 1 || emptyGrid === 3  // Possible moves is either index 0 & 3
      case 1:
        return emptyGrid === 0 || emptyGrid === 4 || emptyGrid === 2 //Possible moves is either index 0 , 4, 2
      case 2:
        return emptyGrid === 1 || emptyGrid === 5 //Possible moves is either index 1,5
      case 3:
        return emptyGrid === 0 || emptyGrid === 4 || emptyGrid === 6 //Possible moves is either index 0,4,6
      case 4:
        return emptyGrid === 1 || emptyGrid === 3 || emptyGrid === 5 || emptyGrid === 7 //Possible moves is either index 1,3,4,7
      case 5:
        return emptyGrid === 2 || emptyGrid === 4 || emptyGrid === 8 //Possible moves is either index 2,4,8
      case 6:
        return emptyGrid === 3 || emptyGrid === 7 //Possible moves is either index 3,7
      case 7:
        return emptyGrid === 6 || emptyGrid === 4 || emptyGrid === 8 //Possible moves is either index 6,4,8
      case 8:
        return emptyGrid === 5 || emptyGrid === 7 //Possible moves is either index 5,7
    }
    return false  // return false as a fallback
  }
  
function swapNumbers(tile, i1, i2) {
    const swap = tile[i1] // Remember the number at tile position i1
    tile[i1] = tile[i2]  // Put the number from the tile position i2 to i1
    tile[i2] = swap // Put the remembered number into the i2
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
    window.location.reload()  // reload the page when clicked
    
}

function timer(){
    let sec = 60

    time = setInterval(() => {
        timeMessage.innerHTML = '00:'+sec
        timeMessage.style.display = "block"
        sec --
        if (sec < 0) {
            clearInterval(time)
            timeMessage.textContent = "Game Over! 😵‍💫"
            timeMessage.style.display = "block"
        }
    },1000)
}

/*----------- Event Listeners ----------*/

bdTile.forEach(key => {
    key.addEventListener('click', handleClick)
})

resetButton.addEventListener('click' , resetBtn)
timerBtn.addEventListener('click',timer)


updateBoard()

