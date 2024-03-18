
let home = 0
let away = 0


let homeScore = document.getElementById('homeScore')
let awayScore = document.getElementById('awayScore')

function andOneHome() {
  console.log('+1');
  home += 1;
  console.log('home', home)
  drawHome()
}

function andThreeHome() {
  console.log('+3');
  home += 3;
  console.log('home', home)
  drawHome()
}

function andOneAway() {
  console.log('+1');
  away += 1;
  console.log('away', away)
  drawAway()
}

function andThreeAway() {
  console.log('+3');
  away += 3;
  console.log('away', away)
  drawAway()
}


function drawHome() {
  let homeScoreElm = document.getElementById('homeScore')
  console.log('homeScore', homeScoreElm);
  homeScoreElm.innerText = home.toString()
}

function drawAway() {
  let awayScoreElm = document.getElementById('awayScore')
  console.log('awayScore', awayScoreElm);
  awayScoreElm.innerText = away.toString()
}