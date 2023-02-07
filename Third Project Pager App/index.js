let phoneScreen = " "
document.getElementById("phone-screen").textContent = phoneScreen
let result1 = document.getElementById("phone-screen")

let pagerScreen = " "
document.getElementById("pager-screen").textContent = pagerScreen
let result2 = document.getElementById("pager-screen")


function no1() {
    phoneScreen += "1"
    result1.innerText = phoneScreen
}
function no2() {
    phoneScreen += "2"
    result1.innerText = phoneScreen
}
function no3() {
    phoneScreen += "3"
    result1.innerText = phoneScreen
}
function no4() {
    phoneScreen += "4"
    result1.innerText = phoneScreen
}
function no5() {
    phoneScreen += "5"
    result1.innerText = phoneScreen
}
function no6() {
    phoneScreen += "6"
    result1.innerText = phoneScreen
}
function no7() {
    phoneScreen += "7"
    result1.innerText = phoneScreen
}
function no8() {
    phoneScreen += "8"
    result1.innerText = phoneScreen
}
function no9() {
    phoneScreen += "9"
    result1.innerText = phoneScreen
}
function no0() {
    phoneScreen += "0"
    result1.innerText = phoneScreen
}
function noSquare() {
    phoneScreen += "#"
    result1.innerText = phoneScreen
}
function noStar() {
    phoneScreen += "*"
    result1.innerText = phoneScreen
}

function reset() {
    phoneScreen = " "
    pagerScreen = " "
    result1.innerText = phoneScreen
    result2.innerText = pagerScreen
}

function send() {
    pagerScreen = phoneScreen
    result2.innerText = pagerScreen
}