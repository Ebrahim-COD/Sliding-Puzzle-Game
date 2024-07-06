/*-------------- Constants -------------*/







/*---------- Variables (state) ---------*/
let tile = [1,2,3,4,5,6,7,8,""]
let correctedTile = [1,2,3,4,5,6,7,8,""]






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
    const clickTile = event.target
    const clickIndex = [...bdTile].indexOf(clickTile);
    const emptyIndex = tile.indexOf("")

    if(canMove(clickIndex, emptyIndex)) {
        swapNumbers(tile , clickIndex, emptyIndex)
        updateBoard()
        if(checkforWinner()) {
            lastMessage.textContent = "Congratulations! You solved the puzzle!"
        }
    }
}

function canMove(clickIndex, emptyIndex) {
    switch (clickIndex) {
      case 0:
        return emptyIndex === 1 || emptyIndex === 3
      case 1:
        return emptyIndex === 0 || emptyIndex === 2 || emptyIndex === 4
      case 2:
        return emptyIndex === 1 || emptyIndex === 5
      case 3:
        return emptyIndex === 0 || emptyIndex === 4 || emptyIndex === 6
      case 4:
        return emptyIndex === 1 || emptyIndex === 3 || emptyIndex === 5 || emptyIndex === 7
      case 5:
        return emptyIndex === 2 || emptyIndex === 4 || emptyIndex === 8
      case 6:
        return emptyIndex === 3 || emptyIndex === 7
      case 7:
        return emptyIndex === 6 || emptyIndex === 4 || emptyIndex === 8
      case 8:
        return emptyIndex === 5 || emptyIndex === 7
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
    let time
    let sec = 0

    time = setInterval(() => {

        timeMessage.innerHTML = '00:'+sec
        sec ++
    },1000)
    

}
/*----------- Event Listeners ----------*/

bdTile.forEach(key => {
    key.addEventListener('click', handleClick)
})

resetButton.addEventListener('click' , resetBtn)
timerBtn.addEventListener('click',timer)

shuffleNumbers(tile)
updateBoard()