let homeScore = document.getElementById("scoreHome")
let guestScore = document.getElementById("scoreGuest")
let hScore = 0
let gScore = 0

function add1Home() {
    hScore += 1
    homeScore.textContent = hScore
}

function add2Home() {
    hScore += 2
    homeScore.textContent = hScore
}

function add3Home() {
    hScore += 3
    homeScore.textContent = hScore
}

function add1Guest() {
    gScore += 1
    guestScore.textContent = gScore
}

function add2Guest() {
    gScore += 2
    guestScore.textContent = gScore
}

function add3Guest() {
    gScore += 3
    guestScore.textContent = gScore
}

function newGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    hScore = 0
    gScore = 0
}