let calculateButton = document.getElementById("calculateTip");
let tipResults = document.getElementById("tipResults");
let tipNewResults = document.getElementById("tipNewResults");
let inputValue = 0;
let fivePercent = 0;
let tenPercent = 0;
let fifteenPercent = 0;
let twentyPercent = 0;
let twentyfivePercent = 0;
let fiftyPercent = 0;

let inputNewValue = 0;
let newPercentage = 0;

function getVal() {
  inputValue = document.getElementById("resultScreen").value;
  console.log(inputValue);
  fivePercent = inputValue * 0.05;
  tenPercent = inputValue * 0.1;
  fifteenPercent = inputValue * 0.15;
  twentyPercent = inputValue * 0.2;
  twentyfivePercent = inputValue * 0.25;
  fiftyPercent = inputValue * 0.5;
}

function calculateTip() {
  /*Tip*/
  document.getElementById("5%").innerHTML = fivePercent;
  document.getElementById("10%").innerHTML = tenPercent;
  document.getElementById("15%").innerHTML = fifteenPercent;
  document.getElementById("20%").innerHTML = twentyPercent;
  document.getElementById("25%").innerHTML = twentyfivePercent;
  document.getElementById("50%").innerHTML = fiftyPercent;
  /*Total*/
  document.getElementById("5%T").innerHTML = 
    parseInt(inputValue) + fivePercent;
  document.getElementById("10%T").innerHTML = 
    parseInt(inputValue) + tenPercent;
  document.getElementById("15%T").innerHTML =
    parseInt(inputValue) + fifteenPercent;
  document.getElementById("20%T").innerHTML =
    parseInt(inputValue) + twentyPercent;
  document.getElementById("25%T").innerHTML =
    parseInt(inputValue) + twentyfivePercent;
  document.getElementById("50%T").innerHTML =
    parseInt(inputValue) + fiftyPercent;
  /*show the table*/
  tipResults.removeAttribute("hidden");
  document.getElementById("percentageInput").removeAttribute("hidden");
  document.getElementById("calculateTipNew").removeAttribute("hidden");
}

/*Second input bar*/

function getNewVal() {
  inputNewValue = document.getElementById("percentageInput").value;
  newPercentage = (parseInt(inputNewValue) / 100) * parseInt(inputValue);
}

function calculateNewTip() {
  /*Percentage*/
  document.getElementById("%").innerHTML = inputNewValue + "%";
  /*Tip*/
  document.getElementById("new%").innerHTML = newPercentage;
  /*Total*/
  document.getElementById("new%T").innerHTML =
    newPercentage + parseInt(inputValue);

  /*show the table*/
  tipResults.hidden = true;
  tipNewResults.hidden = false;
}
