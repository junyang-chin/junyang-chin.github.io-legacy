let result = document.getElementById("result");
let expression = "";
const btnEntry = (arg) => {
  switch (arg) {
    case "=":
      try {
        result.innerHTML = eval(expression).toString();
        if (eval(expression) === 69) {
          alert("Nice!");
        }
      } catch (err) {
        result.innerHTML = "Error";
      }
      break;
    case "DEL":
      expression = expression.slice(0, -1);
      result.innerHTML = expression;
      break;
    case "C":
      expression = "";
      result.innerHTML = expression;
      break;
    default:
      expression += arg;
      result.innerHTML = expression;
      break;
  }
};

// declare valid keypresses
var validKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "(",
  ".",
  ")",
  "Backspace",
  "Delete",
  "Enter",
  "=",
  "c",
  "C",
  "Escape",
];

const keyAction = (e) => {
  console.log(e);
  if (validKeys.includes(e.key)) {
    switch (e.key) {
      case "Backspace":
      case "Delete":
        btnEntry("DEL");
        break;
      case "Enter":
        console.log("pressed enter");
        btnEntry("=");
        break;
      case "Escape":
      case "c":
        btnEntry("C");
        break;
      default:
        btnEntry(e.key);
    }
  }
};
// keydown
window.addEventListener("keydown", keyAction);
