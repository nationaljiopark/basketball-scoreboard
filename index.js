let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");
let homeScore = 0;
let awayScore = 0;

function homeplus1() {
  homeScore += 1;
  homeScoreEl.innerText = homeScore;
}
function homeplus2() {
  homeScore += 2;
  homeScoreEl.innerText = homeScore;
}
function homeplus3() {
  homeScore += 3;
  homeScoreEl.innerText = homeScore;
}

function awayplus1() {
  awayScore += 1;
  awayScoreEl.innerText = awayScore;
}
function awayplus2() {
  awayScore += 2;
  awayScoreEl.innerText = awayScore;
}
function awayplus3() {
  awayScore += 3;
  awayScoreEl.innerText = awayScore;
}

function reset() {
  homeScore = 0;
  awayScore = 0;
  homeScoreEl.innerText = 0;
  awayScoreEl.innerText = 0;
}
