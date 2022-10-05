let homeScore = document.getElementById("scoreHome")
let awayScore = document.getElementById("scoreAway")
let hScore = 0
let aScore = 0

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

function add1Away() {
    aScore += 1
    awayScore.textContent = aScore
}

function add2Away() {
    aScore += 2
    awayScore.textContent = aScore
}

function add3Away() {
    aScore += 3
    awayScore.textContent = aScore
}

function newGame() {
    homeScore.textContent = 0
    awayScore.textContent = 0
    hScore = 0
    aScore = 0
}