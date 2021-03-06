const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const equalSign = document.querySelectorAll(".equal-sign");

equalSign.forEach((equal) => {
  equal.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
  });
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearBtn = document.querySelectorAll(".all-clear");

clearBtn.forEach((clear) => {
  clear.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
  });
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const decimal = document.querySelectorAll(".decimal");

decimal.forEach((decimal) => {
  decimal.addEventListener("change", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
  });
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
