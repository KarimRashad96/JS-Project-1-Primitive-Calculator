const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get Input from Input Field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Change HTML Content to Show the Operation and the Result
function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

// Making a LOG to store all calculations
function writeToLog(operation, initialResult, enteredNumber, currentResult) {
  const LogEntry = {
    operation: operation,
    initialResult: initialResult,
    enteredNumber: enteredNumber,
    currentResult: currentResult,
  };
  logEntries.push(LogEntry);
  console.log(logEntries);
}

// Main Function
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(initialResult, mathOperator, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Buttons Functionality
function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

//Buttons Event Listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
