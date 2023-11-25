let sentence = ["hello", "my", "name", "is", "Per"]
let greetingEl = document.querySelector("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
 }

 function getRandomCard() {
    return randomNumber = math.floor(math.random() * 13) +1
    console.log(randomNumber)
 }

 let likesDocumentaries = true
 let likesStartups = true

 if (likesDocumentaries === true && likesStartups === false) {
    recommendMovie()
 }

 function recommendMovie() {
    console("hey, check out this new film we think you will like it")
 }
    
let playerName = "per"
let playerChips = 145
let playerEl = document.getElementById("player-el")
 playerEl.textContent = playerName + ": $" + playerChips 

 let course = {
    title: ["learn CSS Grid for free"],
    lessons: 16,
}

let liveLikeAking = {
        price: 190,
        haskitchen: false,
        toilet: "private",
        rooms: [beds, bedrooms]
             
}

let person = {
    name: "Raegun",
    age: 41,
    country: "Korea"
}
function logData() {
    return person.name + " is " + person.age + " years old and lives in " + person.country + "." 
}

let age = 67

function discount() { 
    if (age < 6 ) {
        console.log("free")
        }
        else if (age > 6 && age < 17) {
        console.log("child discount")
        }
        else if (age > 17 && age < 27 ) {
        console.log("student discount")
        }   
        else if (age > 26 && age < 67) {
            console.log("full price")
        }
        else {
            console.log("senior citizen discount")
        }
    }
    discount()

    let largeCounties = ["Tuvalu","India","USA", "Indonesia","Monaco"]

largeCounties.pop()
largeCounties.push("Pakistan")
largeCounties.shift()

largeCounties.unshift("China")

let hands = ["rock", "paper", "scissor"]

function gethands() { 
    let randomIndex = math.floor (math.random() * 3)
    return hands[randomIndex]
}

let divContainer = document.getElementById("container")
divContainer.innerHTML = <button>a Buy!</button>