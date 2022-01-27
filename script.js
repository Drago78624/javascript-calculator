const screen = document.getElementById("screen");
const btns = document.querySelectorAll("button");
let screenValue = "";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      buttonText = "";
      screenValue = buttonText;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }

    console.log(buttonText);
  });
});
