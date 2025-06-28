Loops - usecase - with help of loops we can execute a block multiple times

{
 console.log(1)
}

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)

console.log(1000)






for
while
do while








for

 10
print numbers from 1 - 1000 -

for ( starting; ending ; sequence  ){
    mutliple lines of code
}

for (){

}








var number = 1;  starting
number++; sequence
number++;
number++;
number++;
number++;
number++;
1000 <= 1000 true
number <= 1000   ending
1001 <= 1000  false

console.log(number);

for (var number = 1; number <= 1000; number += 1) {
  console.log("Awdiz insitutute");
}









for (var i = 1; i <= 5; i++) {
  console.log(1, i);
//   i++
}

// Iteration 1

// i = 1;
// i <= 5; 1 <= 5 = true
// 1
// i++ i = 2

// Iteration 2

// i = 2
// i <= 5 ; 2 <= 5 ; true
// 1
// i = 2 = 3

// iteration 3
// i = 3
// i <= 5 ; 3 <=5 ; true
// 1
// i++ ; 3 = 4

// iteration 4
// i = 4
// i <= 5 ; 4 <= 5 ; true
// 1
// i++; 4 = 5

// iteration 5th

// i = 5
// i <= 5; 5 <= 5 ; true
// 1
// i++
// i = 5 = 6

// iteration 6th
// i = 6
// i <= 5 ; 6 <= 5 ; false

















Q Print numbers from given varibes with sequence of 5;

var start = 34;
var end = 456;

for (var i = start; i <= end; i += 5) {
  console.log(i);
}
























Q. print number from 10 - 100 who are even.

for( var i = 10; i <= 100; i++ ){
  console.log(i, "i");
    if( i % 2 == 0){
        console.log(i)
    }
}


/ divide

% modules

10 / 2 = 5 - Q

10 % 2 = 0 R
11 % 2 = 1
12 % 2 = 0
13 % 2 = 1
14 % 2 = 0

      ___ 5     Q
   2 /  10
        10
         0 -  R






























Q. print count of even numbers from 10 - 100.

var count = 0;
for (let i = 10; i <= 100; i++) {
  console.log(i, "i");
  if (i % 2 == 0) {
    count++;
  }
}

console.log(count, "count");























print numbers from 10 - 1;

for (let i = 10; i >= 1; i--) {
  console.log(i, "i");
  console.log(i); // 10
}

var count = 0;
for (let i = 100; i >= 10; i--) {
  console.log(i, "i");
  if (i % 2 == 0) {
    count++;
  }
}

console.log(count, "count");





















starting
while( ending  ){

    sequence

}









Print numbers from 1 - 10 with while

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}












Q. print count of odd numbers from 10 - 100 using while loop

let i = 10;
let counter = 0;
while (i <= 100) {
  if (i % 2 == 1) {
    counter++;
  }
  i++;
}
console.log(counter, "coutner");












Q. print number from 100 - 10 amd who are odd by using while loop

let i = 100;
while (i >= 10) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i--;
}
