// Accessing DOM elements
let playerText = document.querySelector('.player-text')
let computerText = document.querySelector('.computer-text')
let btnRock = document.querySelector('.btn-rock')
let btnPaper = document.querySelector('.btn-paper')
let btnScissor = document.querySelector('.btn-scissor')
let resultText = document.querySelector('.result')

// Computer text
function computerShoot () {
    let computerRandomText = Math.floor(Math.random() * 3)
    if (computerRandomText === 0)
    computerText.textContent = 'Computer: Rock'
    else if(computerRandomText === 1)
    computerText.textContent = 'Computer: Paper'
    else if(computerRandomText === 2)
    computerText.textContent = 'Computer: Scissor'
}

// Computer 



// Button Rock
btnRock.addEventListener('click', function () {
    resultText.textContent = 'Result: '
    playerText.textContent = 'Player: Rock'
    computerShoot()
    

    if (computerText.textContent === 'Computer: Rock' && playerText.textContent === 'Player: Rock')
    resultText.textContent = 'Result: Match Tied'
    else if (computerText.textContent === 'Computer: Paper' && playerText.textContent === 'Player: Rock')
    resultText.textContent = 'Result: Player Won'
    else if (computerText.textContent === 'Computer: Scissor' && playerText.textContent === 'Player: Rock')
    resultText.textContent = 'Result: Player Won'

    
})

// Button Paper
btnPaper.addEventListener('click', function () {
    resultText.text
    playerText.textContent = 'Player: Paper'
    computerShoot()

    if (computerText.textContent === 'Computer: Rock' && playerText.textContent === 'Player: Paper')
    resultText.textContent = 'Result: Computer Won'
    else if (computerText.textContent === 'Computer: Paper' && playerText.textContent === 'Player: Paper')
    resultText.textContent = 'Result: Match Tied'
    else if (computerText.textContent === 'Computer: Scissor' && playerText.textContent === 'Player: Paper')
    resultText.textContent = 'Result: Computer Won'
})

// Button Scissor
btnScissor.addEventListener('click', function () {
    resultText.textContent = 'Result: '
    playerText.textContent = 'Player: Scissor'
    computerShoot()

    if (computerText.textContent === 'Computer: Rock' && playerText.textContent === 'Player: Scissor')
    resultText.textContent = 'Result: Computer Won'
    else if (computerText.textContent === 'Computer: Paper' && playerText.textContent === 'Player: Scissor')
    resultText.textContent = 'Result: Player won'
    else if (computerText.textContent === 'Computer: Scissor' && playerText.textContent === 'Player: Scissor')
    resultText.textContent = 'Result: Match Tied'
})
























