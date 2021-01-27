let player1 = "background-color: black"
let player2 = "background-color: blue"
let round = 1
let places = [...document.querySelectorAll(".XO")]
places.forEach(XO => XO.addEventListener("click", choose))

function choose(event){
    let turn = round % 2 ===0 ? player2 : player1
    event.target.classList.add(turn)
    round++
}