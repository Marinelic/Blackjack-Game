
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



    
    
/* console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false */








let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true 

// 1. Declare a variable called message and assign its value to an empty string
let message = ""
    
    function startGame() {
        if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"   // 2. Reassign the message variable to the string we're logging out
        
        } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"      // 2. Reassign the message variable to the string we're logging out
            hasBlackJack = true
        } else {
        message = "You're out of the game! 😭"           // 2. Reassign the message variable to the string we're logging out
            isAlive = false
        }

            console.log(message)

    }

