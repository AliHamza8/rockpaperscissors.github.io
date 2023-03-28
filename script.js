// Accessing DOM elements
let playerText = document.querySelector('.player-text')
let computerText = document.querySelector('.computer-text')
let btnRock = document.querySelector('.btn-rock')
let btnPaper = document.querySelector('.btn-paper')
let btnScissor = document.querySelector('.btn-scissor')

function computerPlayer() {
    if (Math.floor(Math.random() * 3) === 0) {
    computerText.textContent = "Computer: Rock"
    } else if (Math.floor(Math.random() * 3) === 1) {
        computerText.textContent = "Computer: Paper"
    } else {
        computerText.textContent = "Computer: Scissor"
    }
}


btnRock.addEventListener('click', function () {
    playerText.textContent = 'Player: Rock'
    computerPlayer()
})

btnPaper.addEventListener('click', function () {
    playerText.textContent = 'Player: Paper'
    computerPlayer()
})

btnScissor.addEventListener('click', function () {
    playerText.textContent = 'Player: Scissor'
    computerPlayer()
})