const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// DOM Elements
const btn1El = document.getElementById("btn1")
const btn2El = document.getElementById("btn2")

function generatePassword() {
    btn1El.value = random()
    btn2El.value = random()
}

function random() {
    let passwordLength = 15
    let password = ""
    for (let i = 0; i < passwordLength; i++){
        let randomChar = Math.floor(Math.random() * characters.length)
        password += characters[randomChar]
    }
    return password
}

function copy1() {
    console.log(btn1El.value)
    btn1El.select();
    navigator.clipboard.writeText(btn1El.value);
}

function copy2() {
    console.log(btn2El.value)
    btn2El.select();
    navigator.clipboard.writeText(btn2El.value);
}