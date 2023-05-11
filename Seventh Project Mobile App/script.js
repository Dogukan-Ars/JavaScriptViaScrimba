import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-d4fda-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputEl = document.getElementById("input-field")
const btnEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

btnEl.addEventListener("click", function() {    
    let inputVal = inputEl.value

    push(shoppingListInDB, inputVal)

    clearInput()
})


onValue(shoppingListInDB, function(snapshot) {
    
    if(snapshot.exists()) {
        let snapValArr = Object.entries(snapshot.val())

        clearShoppingList()

        for (let items of snapValArr) {
            let currentItem = items

            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemtoShoppingList(currentItem)
        }
    } else {
        shoppingListEl.innerHTML = "There is no items here... yet!"
    }
})

const clearShoppingList = () => shoppingListEl.innerText = ""

const clearInput = () => inputEl.value = ""

const appendItemtoShoppingList = (item) => {
    // shoppingListEl.innerHTML += `<li>${itemVal}</li>`
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    newEl.textContent = itemValue

    newEl.addEventListener("dblclick", () => {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}