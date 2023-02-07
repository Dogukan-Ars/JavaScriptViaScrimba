let homeScore = 0 
document.getElementById("home-score").textContent = homeScore
let guestScore = 0
document.getElementById("guest-score").textContent = guestScore
let sum1 = document.getElementById("home-score")
let sum2 = document.getElementById("guest-score")
function homePlusOne() {
    homeScore += 1
    let sum = homeScore
    sum1.innerText = sum
}

function homePlusTwo() {
    homeScore += 2
    let sum = homeScore
    sum1.innerText = sum
}
function homePlusThree() {
    homeScore += 3
    let sum = homeScore
    sum1.innerText = sum
}
function guestPlusOne() {
    guestScore += 1
    let sum = guestScore
    sum2.innerText = sum
}
function guestPlusTwo() {
    guestScore += 2
    let sum = guestScore
    sum2.innerText = sum
}
function guestPlusThree() {
    guestScore += 3
    let sum = guestScore
    sum2.innerText = sum
}