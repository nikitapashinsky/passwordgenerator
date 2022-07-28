const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")

function generatePassword() {
    let passwordOne = []
    let passwordTwo = []
    
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) 
        passwordOne.push(characters[randomIndex])
    }
    
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) 
        passwordTwo.push(characters[randomIndex])
    }
    
    passwordOneEl.textContent = passwordOne.join('').toString()
    passwordTwoEl.textContent = passwordTwo.join('').toString()
}

function copyPasswordOne() {
    console.log(passwordOneEl.textContent)
    let copyText = document.getElementById("passwordOne")
    navigator.clipboard.writeText(copyText.textContent);
}