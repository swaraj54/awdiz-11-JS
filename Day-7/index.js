Given an array check given age from end side of array
if found then return index
if not found then retun "Not found"

let usersAge = [24, 32, 45, 65, 23, 56, 28, 23];
let targetAge = 24;
let matchedFlag = false;

for (let i = usersAge.length - 1; i >= 0; i--) {
  // console.log(usersAge[i], i);
  if (targetAge == usersAge[i]) { // 24 == 23 false
    console.log(i);
    matchedFlag = true;
    break;
  }
//    else {
//     console.log("Not found.");
//   }
}

if (matchedFlag == false) {
  console.log("Not found.");
}













// reduce
// every
// some

// reduce;

Find addition of Elements from array  30

var nums = [1, 2, 3, 4, 5];
// 30
let initialValue = 0;

// 0 + 1 + 2 + 3 + 4 + 5
let total = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(total);









every  == and operator 
boolean based

var numbers = [1, 2, 3, 40, 50];
const result = numbers.every((num) => num < 10);
console.log(result,"result")













some == or operator 


var numbers = [10, 20, 30, 40, 50];
const result = numbers.some((num) => num < 10);
console.log(result,"result")

