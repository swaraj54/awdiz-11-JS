Conditional statement

Types
if else
switch







if else

syntax

if () {

} else {

}













var left = 2;
var right = 3;

console.log(left < right);












if (2 < 3) {
  console.log(
    "line no 23. If condition is true then if block will get execute."
  );
} else {
  console.log(
    "line no 25. If condition is false then else block will get execute."
  );
}














age < 18 - no dl
age == 18 - LL

age > 18 - dl
age <= 80

19 80 - dl
81 - no dl




var age = 85;
if (age == 18) {
  //true
  console.log("You are eligible for learning license");
} else if (age > 18 && age <= 80) {
  // true
  console.log("You are eligibe for DL.");
} else {
  console.log("You are not eligible for DL.");
}












2 == 2

switch (key) {
    case value:

        break;

    default:
        break;
}









var userSelectedFruit = "apple";

switch (userSelectedFruit) {
  case "Apple":
    console.log("You have selected Apple.");
    break;
  case "Banana":
    console.log("You have selected Banana.");
    break;
  case "Strawberry":
    console.log("You have selected Strawberry.");
    break;
  default:
    console.log("You have selected none of available fruit.");
    break;
}
