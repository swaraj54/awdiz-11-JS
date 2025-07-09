function - is a block of code used to perform a specific task

var age = 23; // data store

function Kuchbhi() {
  // mutliple lines of code
  console.log("Pull Request");
}
function Awdiz() {
  console.log("Action");
}
Kuchbhi();
Awdiz();
Awdiz();
Kuchbhi();
console.log("After function.");
Kuchbhi();
Kuchbhi();
Kuchbhi();
Awdiz();














// Q . Given an two varibles print addition of them.
let a = 20;
let b = 40;

function AdditionOfTwoVarible() {
  console.log(a + b);
}
AdditionOfTwoVarible();

function SubtractionOfTwoVarible() {
  console.log(a - b);
}
SubtractionOfTwoVarible();


















Q . Given an two varibles print addition of them by using parameters
let a = 20;
let b = 40;

function AdditionOfTwoVarible(number1, number2) {
  console.log(number1 + number2);
}
AdditionOfTwoVarible(a, b);
AdditionOfTwoVarible(50, 100);













Q Given numbers write two functions for subtraction and additions

function addition(num1, num2, num3, num4) {
//   console.log(num1, "num1", num2, "num2", num3, "num3", num4, " num4");
  console.log(num1 + num2 + num3 + num4);
}

function subtraction(num1, num2, num3, num4) {
//   console.log(num1, "num1", num2, "num2", num3, "num3", num4, "num4");
  console.log(num1 - num2 - num3 - num4);
}

addition(3, 2, 1, 234);
subtraction(6, 5, 4, 876);














function AdditionOfTwoVarible(a, b) {
  console.log(a + b, "hi");
  return a + b; // return -  function stop
  console.log(b + 1);
}
console.log(AdditionOfTwoVarible(100, 200));
var output = AdditionOfTwoVarible(20, 40);
console.log(output, "output");















var folders = ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5"];
var userTypedText = "Day-5";

function getTypedSuggestions(data, userTypedText) {
  //   console.log(data, "data");
  let filteredData = data.filter((ele) => ele == userTypedText);
  return filteredData;
}

const output = getTypedSuggestions(folders, userTypedText);
console.log(output, "output");
