/*-------------- Constants -------------*/
let correctedTile = [1,2,3,4,5,6,7,8,""]
let time
let puzzleWon = false
/*---------- Variables (state) ---------*/
let tile = [1,2,3,4,5,6,7,8,""]



/*----- Cached Element References  -----*/
const bdTile = document.querySelectorAll(".boardTile")
const lastMessage = document.querySelector(".lastMessage")
const resetButton = document.querySelector("#resetBtn")
const timerBtn = document.querySelector("#timeB")
const timeMessage = document.querySelector("#timeM")


/*-------------- Functions -------------*/
function shuffleNumbers(array) {

    array.sort(() => Math.random() - 0.5) //shuffle the array 

}
shuffleNumbers(tile)    

function handleClick(event) {

    if(puzzleWon) {
        return
    }

    if(timeMessage.textContent.includes("Game Over!")) {
        return
    }

    const clickTile = event.target
    const clickedGrid = [...bdTile].indexOf(clickTile);
    const emptyGrid = tile.indexOf("")

    if(canMove(clickedGrid, emptyGrid)) {
        swapNumbers(tile , clickedGrid, emptyGrid)
        updateBoard()
        if(checkforWinner()) {
            puzzleWon = true
            lastMessage.textContent = "Congratulations! You solved the puzzle!"
            lastMessage.style.display = "block"
            clearInterval(time) //stop the timer
        }
    }
}

function canMove(clickedGrid, emptyGrid) {
    switch (clickedGrid) {
      case 0:
        return emptyGrid === 1 || emptyGrid === 3
      case 1:
        return emptyGrid === 0 || emptyGrid === 4 || emptyGrid === 2
      case 2:
        return emptyGrid === 1 || emptyGrid === 5
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
    return false
  }
  
function swapNumbers(tile, i1, i2) {
    const swap = tile[i1]
    tile[i1] = tile[i2]
    tile[i2] = swap
}

function updateBoard() {
    bdTile.forEach((key, index) => {
        key.innerHTML = tile[index]
    })
}

function checkforWinner() {
    let winner = true

    tile.forEach((key, index) => {
        if(key != correctedTile[index]) {
            winner = false
        } 
        
    })
    return winner
}

function resetBtn(){
    window.location.reload()
}

function timer(){
    let sec = 60

    time = setInterval(() => {
        timeMessage.innerHTML = '00:'+sec
        timeMessage.style.display = "block"
        sec --
        if (sec < 0) {
            clearInterval(time)
            timeMessage.textContent = "Game Over!"
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

shuffleNumbers(tile);
updateBoard()