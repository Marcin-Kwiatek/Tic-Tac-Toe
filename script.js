window.addEventListener('DOMContentLoaded', (event => {
    
}))
let p0 = document.getElementById("p0")
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')

let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let p5 = document.getElementById('p5')

let p6 = document.getElementById('p6')
let p7 = document.getElementById('p7')
let p8 = document.getElementById('p8')

p0.addEventListener("click", function() { change(0) })
p1.addEventListener("click", function() { change(1) })
p2.addEventListener("click", function() { change(2) })

p3.addEventListener("click", function() { change(3) })
p4.addEventListener("click", function() { change(4) })
p5.addEventListener("click", function() { change(5) })

p6.addEventListener("click", function() { change(6) })
p7.addEventListener("click", function() { change(7) })
p8.addEventListener("click", function() { change(8) })

let player1 = "X"
let player2 = "O"
let round = 1

function change(nr){
    let turn = round % 2 === 0 ? player2 : player1
    let place = document.getElementById("p"+nr)
    place.innerHTML=(turn)
    round++
}