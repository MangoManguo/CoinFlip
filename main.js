// COIN FLIP SIMULATOR

// HTML variables
let output1 = document.getElementById("output");
let headCount = document.getElementById("headsOut");
let tailCount = document.getElementById("tailsOut");

// Count variables
let numHeads = 0;
let numTails = 0;
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;
let total = 0;

// HTML var for dice
let output2 = document.getElementById("output2");
let oneCount = document.getElementById("ones");
let twoCount = document.getElementById("twos");
let threeCount = document.getElementById("threes");
let fourCount = document.getElementById("fours");
let fiveCount = document.getElementById("fives");
let sixCount = document.getElementById("sixs");
let totalCount = document.getElementById("total");

// event listeners
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btn2").addEventListener("click", btn2Clicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // simulate coin flip
  if (randNum < 0.5) {
    output1.innerHTML = "<img src='img/heads.png'/>";
    numHeads++;
    headCount.innerHTML = numHeads;
  } else {
    output1.innerHTML = "<img src='img/tails.png'/>";
    numTails++;
    tailCount.innerHTML = numTails;
  }
}

function btn2Clicked() {
  let randNum = Math.floor(Math.random() * 6 + 1);
  console.log(randNum);

  if (randNum == 1) {
    output2.innerHTML = "<img src='img/1.png' />";
    numOne++;
    total += 1;
    totalCount.innerHTML = total;
    oneCount.innerHTML = numOne;
  } else if (randNum == 2) {
    output2.innerHTML = "<img src='img/2.png'/>";
    numTwo++;
    total += 2;
    totalCount.innerHTML = total;
    twoCount.innerHTML = numTwo;
  } else if (randNum == 3) {
    output2.innerHTML = "<img src='img/3.png'/>";
    numThree++;
    total += 3;
    totalCount.innerHTML = total;
    threeCount.innerHTML = numThree;
  } else if (randNum == 4) {
    output2.innerHTML = "<img src='img/4.png'/>";
    numFour++;
    total += 4;
    totalCount.innerHTML = total;
    fourCount.innerHTML = numFour;
  } else if (randNum == 5) {
    output2.innerHTML = "<img src='img/5.png'/>";
    numFive++;
    total += 5;
    totalCount.innerHTML = total;
    fiveCount.innerHTML = numFive;
  } else if (randNum == 6) {
    output2.innerHTML = "<img src='img/6.png'/>";
    numSix++;
    total += 6;
    totalCount.innerHTML = total;
    sixCount.innerHTML = numSix;
  }
}
