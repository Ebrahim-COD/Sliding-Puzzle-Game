/*-------------- Constants -------------*/







/*---------- Variables (state) ---------*/
let tile = [1,2,3,4,5,6,7,8,""]
let correctedTile = [1,2,3,4,5,6,7,8,""]






/*----- Cached Element References  -----*/
const bdTile = document.querySelectorAll(".boardTile")
const lastMessage = document.querySelector(".lastMessage")



/*-------------- Functions -------------*/
function shuffleNumbers(array) {

    array.sort(() => Math.random() - 0.5) //shuffle the array 
    bdTile.forEach((key, index) => {
        key.innerHTML = array[index] // Assign the shuffled values to the bdTile elements
    })
}
shuffleNumbers(tile)    

function handleClick(event) {
    const clickTile = event.target
    console.log(clickTile.innerHTML);

}

function swapNumbers(tile, i1, i2) {
    const swap = tile[i1]
    tile[i1] = tile[i2]
    tile[i2] = swap

}

function adjacentNumbers() {

    const emptyIndex = tile.indexOf("")

    if (emptyIndex > 0 && emptyIndex < tile.length - 1) { //checks if there is empty tile and its not at the edges

        const leftNumber = typeof tile[emptyIndex - 1] === "number" // checks the tile before and after are numbers
        const rightNumber = typeof tile[emptyIndex + 1] === "number"

        return leftNumber && rightNumber //return true if both tiles are number
    }

    return false //empty tile is not between numbers
    
}

function moveNumbers() {

    bdTile.forEach((key, index) => {
        if (key.innerHTML === "0") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "1") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "2") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "3") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "4") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "5") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "6") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "7") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
        if (key.innerHTML === "8") {
            swapNumbers(tile, index, tile.indexOf(""));
            return;
        }
    });

    
}







/*----------- Event Listeners ----------*/

bdTile.forEach(key => {
    key.addEventListener('click', handleClick)
})

