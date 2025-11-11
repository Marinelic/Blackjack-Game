let playerCards = []
let playerSum = 0
let dealerCards = []
let dealerSum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let dealerCardsEl = document.getElementById("dealer-cards")
let dealerScoreEl = document.getElementById("dealer-score")
let playerCardsEl = document.getElementById("player-cards")
let playerScoreEl = document.getElementById("player-score")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false

    // reset both hands
    playerCards = []
    dealerCards = []
    playerSum = 0
    dealerSum = 0

    // player gets 2 cards
    playerCards.push(getRandomCard(), getRandomCard())
    playerSum = playerCards[0] + playerCards[1]

    // dealer gets 1 card
    dealerCards.push(getRandomCard())
    dealerSum = dealerCards[0]

    renderGame()
}

function renderGame() {
    // Player UI
    playerCardsEl.textContent = playerCards.join(" ")
    playerScoreEl.textContent = "Score: " + playerSum

    // Dealer UI
    dealerCardsEl.textContent = dealerCards.join(" ")
    dealerScoreEl.textContent = "Score: " + dealerSum

    // Messages
    if (playerSum < 21) {
        message = "Do you want to draw a new card?"
    } else if (playerSum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        playerCards.push(card)
        playerSum += card
        renderGame()
    }
}
