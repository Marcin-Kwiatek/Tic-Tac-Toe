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

let round = 1

function change(nr){
    let player1 = "X"
    let player2 = "O"
    let turn = round % 2 === 0 ? player2 : player1
    let place = document.getElementById("p"+nr)
    if(place.textContent===""){
    place.innerHTML= turn
    round++
    }
    finish()
}
function finish(){
    if(p0.textContent==="X"&&p1.textContent==="X"&&p2.textContent==="X"){console.log("winner player 1")}
    if(p3.textContent==="X"&&p4.textContent==="X"&&p5.textContent==="X"){console.log("winner player 1")}
    if(p6.textContent==="X"&&p7.textContent==="X"&&p8.textContent==="X"){console.log("winner player 1")}
    if(p0.textContent==="X"&&p3.textContent==="X"&&p6.textContent==="X"){console.log("winner player 1")}
    if(p1.textContent==="X"&&p4.textContent==="X"&&p7.textContent==="X"){console.log("winner player 1")}
    if(p2.textContent==="X"&&p5.textContent==="X"&&p8.textContent==="X"){console.log("winner player 1")}
    if(p0.textContent==="X"&&p4.textContent==="X"&&p8.textContent==="X"){console.log("winner player 1")}
    if(p2.textContent==="X"&&p4.textContent==="X"&&p6.textContent==="X"){console.log("winner player 1")}

    if(p0.textContent==="O"&&p1.textContent==="O"&&p2.textContent==="O"){console.log("winner player 2")}
    if(p3.textContent==="O"&&p4.textContent==="O"&&p5.textContent==="O"){console.log("winner player 2")}
    if(p6.textContent==="O"&&p7.textContent==="O"&&p8.textContent==="O"){console.log("winner player 2")}
    if(p0.textContent==="O"&&p3.textContent==="O"&&p6.textContent==="O"){console.log("winner player 2")}
    if(p1.textContent==="O"&&p4.textContent==="O"&&p7.textContent==="O"){console.log("winner player 2")}
    if(p2.textContent==="O"&&p5.textContent==="O"&&p8.textContent==="O"){console.log("winner player 2")}
    if(p0.textContent==="O"&&p4.textContent==="O"&&p8.textContent==="O"){console.log("winner player 2")}
    if(p2.textContent==="O"&&p4.textContent==="O"&&p6.textContent==="O"){console.log("winner player 2")}
}