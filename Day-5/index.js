do while  - before checking condition it exectute the block

starting
do{
    code
    sequemce
}while(ending)














Print number from 1 - 10

let i = 1;

do {
    console.log(i)
    i++;
} while ( i > 10)














Q Print count of odd numbers from 100 - 1

let i = 100;
let count = 0;
do {
  if (i % 2 == 1) {
    count++;
  }
  i--;
} while (i >= 1);

console.log(count, "count");
















break - stop execution of loop
continue - skip single iteration of loop

for (var i = 1; i <= 10; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}









Q 1 - 100 , print count of even numbers  , and if count goes above 20 then break loop

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    if (count >= 20) {
      break;
    }
    count++;
  }
}
console.log(count);










for (let i = 1; i <= 10; i++) {
  if (i == 5 || i == 7 || i == 1) {
    continue;
  }
  console.log(i);
}

array - [ele, ele, ele, ele];

let allUserAge = [1, 2, 3, 4, 5];
console.log(allUserAge, "allUserAge");

console.log(allUserAge[0], "allUserAge[0]");
console.log(allUserAge[1], "allUserAge[0]");
console.log(allUserAge[2], "allUserAge[0]");
console.log(allUserAge[3], "allUserAge[0]");

console.log(allUserAge.length);

Math.round
Math.floor
Math.ceil

console.log(2.2);
console.log(Math.round(2.2));
console.log(Math.floor(2.2));
console.log(Math.ceil(2.2));

console.log(allUserAge[Math.round((allUserAge.length - 1) / 2)]);




















var numbers = [1, 2, 3, 4, 5];
numbers.push(233);
numbers.pop();
numbers.pop();
let deletedNumber = numbers.pop();

console.log(numbers, "numbers", deletedNumber, "deletedNumber");

















var numbers = [1, 2, 3];
numbers.shift();
numbers.shift();
numbers.unshift(5);
console.log(numbers);

























var numbers = [1, 2, 3];

console.log(numbers[0]);
console.log(numbers.at(0));




















var numbers1 = [1, 2, 3];

var numbers2 = [4, 5, 6];

var nums3 = numbers1.concat(numbers2);
console.log(nums3);
























const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
console.log(isLargeNumber, "isLargeNumber");
console.log(array1.indexOf(44));


























var nums = [11, 22, 33];

console.log(nums.findIndex(33));

const animals = ["ant", "bison", "camel", "duck", "elephant", "awdaw"];

var newArray = animals.slice(2);
console.log(newArray);

var newArray = animals.slice(2, 5);
console.log(newArray);

var newArray = animals.slice(-3);
console.log(newArray);

var newArray = animals.slice(1, -2);
console.log(newArray);

var newArray = animals.slice(-2, 1);
console.log(newArray);

























const months = ["Jan", "March", "April", "June"];

// months.splice(index, remove/replace index, element )

months.splice(1, 0, "May");
months.splice(1, 1, "May");
months.splice(1, 2, "May");

console.log(months);





















const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]




















const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
Expected output: Array [1, 100000, 21, 30, 4]
















const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
console.log(array1);


















const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]


















const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
