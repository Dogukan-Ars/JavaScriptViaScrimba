let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl)
// let begin = document.getElementById("start-btn")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el") // getElementById is similar to querySelector but when you use it, dont forget to put '#' before the id and '.' before the class
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Dogu",
    chips: 145
    // sayHello: function(){
    //     console.log("heisann!")
    // }
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomNums()
    let secondCard = getRandomNums()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Card : "
    sumEl.textContent = ("Sum : " + sum)
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
        if(sum < 21) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Wohoo! You've got BLACKJACK!"
            hasBlackJack = true
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
        
    }
    
    messageEl.textContent = message
}
function newCard() {
    console.log("Drawing a new card from the deck!")
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomNums()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }    
}
function getRandomNums() {
    let randomNumber =  Math.floor(1 + Math.random() * 13)
    if(randomNumber === 1) {
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }    
}
// startGame()