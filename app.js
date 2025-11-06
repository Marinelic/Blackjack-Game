
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true 
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

    
    function startGame() {
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
        sumEl.textContent = "Sum: " + sum

        if (sum <= 20) {
        message = "Do you want to draw a new card?"   // 2. Reassign the message variable to the string we're logging out
        
        } else if (sum === 21) {
        message = "You've got Blackjack!"      // 2. Reassign the message variable to the string we're logging out
            hasBlackJack = true
        } else {
        message = "You're out of the game! 😭"           // 2. Reassign the message variable to the string we're logging out
            isAlive = false
        }

            messageEl.textContent = message
    }


    function newCard() {
        console.log("Drawing a new card from the deck!")
    }

