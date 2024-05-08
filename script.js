const homeScore = document.getElementById("scoreHome");
const awayScore = document.getElementById("scoreAway");
let hScore = 0;
let aScore = 0;

const add1Home = () => {
  hScore += 1;
  homeScore.textContent = hScore;
};

const add2Home = () => {
  hScore += 2;
  homeScore.textContent = hScore;
};

const add3Home = () => {
  hScore += 3;
  homeScore.textContent = hScore;
};

const add1Away = () => {
  aScore += 1;
  awayScore.textContent = aScore;
};

const add2Away = () => {
  aScore += 2;
  awayScore.textContent = aScore;
};

const add3Away = () => {
  aScore += 3;
  awayScore.textContent = aScore;
};

const newGame = () => {
  homeScore.textContent = 0;
  awayScore.textContent = 0;
  hScore = 0;
  aScore = 0;
};
