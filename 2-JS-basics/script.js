// let firstName = "Dan";
// let age = 23;

// console.log(firstName + " " + age);

// let job, isMarried;
// job = "developer";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". is he married? " +
//     isMarried
// );

// // Variable mutation
// age = "twenty five";
// job = "engineer";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". is he married? " +
//     isMarried
// );

// let lastName = prompt("What is his Name?");
// console.log(firstName + " " + lastName);

/*********************
 * Basic operators
 */

// let now, yearDan, yearMark;

// now = 2018;
// yearDan = now - 23;
// yearMark = now - 33;

// console.log(now, yearDan, yearMark);

// console.log(now + 2);

// // Logical operators

// let danOlder = yearDan > yearMark;
// console.log(danOlder);

// console.log(typeof danOlder);

/******************
 * Operator precedence
 */

// let now = 2018;
// let yearDan = 1995;
// let fullAge = 18;

// let isFullAge = now - yearDan >= fullAge;
// console.log(isFullAge);

// let ageDan = now - yearDan;
// let ageMark = 35;
// let average = (ageDan + ageMark) / 2;
// console.log(average);

// let x = 2;
// x *= 2;
// console.log(x);

/********************************
 * CODING CHALLENGE 1
 */

// let heightJohn, heightMark, massJohn, massMark;

// heightJohn = prompt("what a John height?");
// console.log(heightJohn + "m");
// massJohn = prompt("what a John mass?");
// console.log(massJohn + "kg");

// heightMark = prompt("what a Mark height?");
// console.log(heightMark + "m");
// massMark = prompt("what a Mark mass?");
// console.log(massMark + "kg");

// let bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiJohn);
// let bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);

// let isBigger = bmiJohn > bmiMark;
// console.log("is John bigger then Mark? " + isBigger);

/**************************************
 * else / if
 */

// let firstName = "John";
// let civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + "is married");
// } else {
//   console.log(firstName + "will hopefully marry soon :)");
// }

// let isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + "will hopefully marry soon :)");
// }

/*********************************
 * Boolean logic
 */

// let firstName = "John";
// let age = prompt("How old is he?");

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

/************************************
 * The Ternary Operation and Switch Statements
 */

// let firstName = "John";
// let age = prompt("How old is he?");

// let drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// // Switch statement

// let job = prompt("What is his job?");

// switch (job) {
//   case "teacher":
//     alert(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     alert(firstName + " drives an uber in Lisbon.");
//     break;
//   case "disigner":
//     alert(firstName + " designs beautiful websites.");
//     break;
//   default:
//     alert(firstName + " does somthing else.");
// }

/*************************************
 * Truthy and Falsy and equality operators
 */

//false values: undefined, null, 0, '', NaN

// let height;

// height = 0;

// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable is undefined");
// }

/********************************
 * CODING CHALLENGE 2 !!!!!!!!!!!!!!!!!!!!!!
 */

// let JohnTeam, MickTeam, MarryTeam;

// MarryTeam = (97 + 134 + 105) / 3;
// JohnTeam = (89 + 120 + 103) / 3;
// MickTeam = (116 + 94 + 123) / 3;

// if (JohnTeam > MickTeam && JohnTeam > MarryTeam) {
//   console.log("JohnTeam is Win!!!");
// } else if (MickTeam > JohnTeam && MickTeam > MarryTeam) {
//   console.log("MickTeam is Win!!!");
// } else if (MarryTeam > JohnTeam && MarryTeam > MickTeam) {
//     console.log("MarryTeam is Win!!!");
// } else {
//     console.log("There is draw!!!");
// }

/*
if (JohnTeam > MickTeam) {
  console.log("JohnTeam is Win!!!");
} else if (JohnTeam < MickTeam) {
  console.log("MickTeam is Win!!!");
} else {
  console.log("There is draw!!!");
}
*/

/*************************************************
 * Function
 */

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// let ageJohn = calculateAge(1990);
// let ageMark = calculateAge(1948);
// console.log(ageJohn, ageMark);

// function yearUntilRetirement(year, firstName) {
//   let age = calculateAge(year);
//   let retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else {
//     console.log(firstName + " is already retired. ");
//   }
// }

// yearUntilRetirement(1990, " John");
// yearUntilRetirement(1948, " Mike");

/****************************************************
 * Function Statements and Expressions
 */

// Function declaration
// function whatDoYouDo(job, FirstName) {}

// Function expression

// let whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code";
//     case "driver":
//       return firstName + " drives a cab in Lisbon.";
//     case "designer":
//       return firstName + " designs beautiful websites";
//     default:
//       return firstName + " does something else";
//   }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo("driver", "Jane"));
// console.log(whatDoYouDo("designer", "Mark"));

/******************************************
 * Arrays
 */

//Initialize new array

// let names = ["John", "Mark", "Jane"];
// let years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// //Mutate array data
// names[1] = "Ben";
// names[names.length] = "Mary";
// console.log(names);

// //Different data types
// let john = ["John", "Smith", 1990, "teacher", false];

// john.push("blue"); //add element to the end
// john.unshift("Mr"); //add element to the start
// console.log(john);

// john.pop(); //delet element to the end
// john.shift(); //add element to the start
// console.log(john);

// console.log(john.indexOf(23));

// let isDesigner =
//   john.indexOf("designer") === -1
//     ? "John is not a designer"
//     : "John IS a designer";
// console.log(isDesigner);

/*****************************************
 * CODING CHALLENGE 3 !!!!!!!!!!!!!!!!!!!!!!
 */

// function tipCalculator(bill) {
//   let percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// let bills = [124, 48, 268];
// let tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2])
// ];
// let sumBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(sumBills);

/***************************************
 * Objects and properties
 */

// let john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   isMarried: false
// };

// console.log(john.firstName);
// console.log(john["lastName"]);
// let x = "birthYear";
// console.log(john[x]);

// john.job = "designer";
// john["isMarried"] = true;

// console.log(john);

/*************************************
 * Objects and arrays
 */

// let john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1995,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };

// john.calcAge();
// console.log(john);

/*****************************************
 * CODING CHALLENGE 3 !!!!!!!!!!!!!!!!!!!!!!
 */

// let heightJohn, heightMark, massJohn, massMark;

// heightJohn = prompt("what a John height?");
// console.log(heightJohn + "m");
// massJohn = prompt("what a John mass?");
// console.log(massJohn + "kg");

// heightMark = prompt("what a Mark height?");
// console.log(heightMark + "m");
// massMark = prompt("what a Mark mass?");
// console.log(massMark + "kg");

// let bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiJohn);
// let bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);

// let isBigger = bmiJohn > bmiMark;
// console.log("is John bigger then Mark? " + isBigger);

// let john = {
//   fullName: "John",
//   mass: massJohn,
//   height: heightJohn,
//   calcBmi: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// let mark = {
//   fullName: "Mark",
//   mass: massMark,
//   height: heightMark,
//   calcBmi: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// if (john.calcBmi() > mark.calcBmi()) {
//   console.log(john.fullName + " has a higher BMI of " + john.bmi);
// } else if (mark.calcBmi() > john.calcBmi()) {
//   console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
// } else {
//   console.log(mark.fullName + " and " + john.fullName + " have same bmi ");
// }

/*********************************************
 *  Loops and iteration
 */

//for loop
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to consol, i++
// i = 1, 1 < 10 true, log i to consol, i++
//...
// i = 9, 9 < 10 true, log i to consol, i++
// i = 10, 10 < 10 False, exit the loop!

let john = ["John", "Smith", 1990, "designer", false];

for (let i = 0; i < john.length; i++) {
  console.log(john[i]);
}

//while loop

let i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

//continue and break statements

let john = ["John", "Smith", 1990, "designer", false];
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

//Looping backwards

for (let i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

