
/* let firstCard = 2
let secondCard = 8

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")  
} else {
    console.log("You're out of the game! 😭")
} */






/* let age = 22

if (age < 22) {
   console.log("You can not enter the club!") 
} else {
    console.log("Welcome!")
}
 */



/* let age = 100

    if (age < 100) {
        console.log("Not elegible")
    } else if (age === 100) {
         console.log("Here is your birthday card from the King!")
    } else {
        console.log("Not elegible, you have already gotten one")
    }
 */




let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false

let isAlive = true 

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
    
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
        hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}