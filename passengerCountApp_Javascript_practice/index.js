<<<<<<< HEAD
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
=======
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
>>>>>>> e6c91d4039c4f9ba74953cda9d832050ae1b5d22
}