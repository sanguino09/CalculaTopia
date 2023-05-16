let resultScreen = document.getElementById("resultScreen");
let buttons = Array.from(document.getElementsByClassName("button"));
let mystery = document.getElementsByClassName('mystery');

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        resultScreen.innerText = "";
        break;
      case "DEL":
        if (resultScreen.innerText) {
          resultScreen.innerText = resultScreen.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          resultScreen.innerText = eval(resultScreen.innerText);
        } catch {
          resultScreen.innerText = "Error";
        }
        break;
      default:
        resultScreen.innerText += e.target.innerText;
    }
  });
});

/*
mystery.addEventListener("click", (e) => {

});
*/