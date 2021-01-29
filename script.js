window.addEventListener('DOMContentLoaded', (event) => {
    
})

let player1 ="X"
let player2 ="O"
let round = 1
let places = [...document.querySelectorAll(".XO")]
places.forEach(XO => XO.addEventListener("click", choose))

function choose(event){
    let turn = round % 2 ===0 ? player2 : player1
    event.target.idList.add(turn)
    round++
}

