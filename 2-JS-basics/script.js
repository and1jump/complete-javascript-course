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

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
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

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
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

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
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
 * CODING CHALLENGE 4 !!!!!!!!!!!!!!!!!!!!!!
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
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

// let john = ["John", "Smith", 1990, "designer", false];
// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") continue;
//   console.log(john[i]);
// }

// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

// //Looping backwards

// for (let i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

let john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  tipCalculator: function() {
    this.tips = [];
    this.finalValues = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

let mark = {
  fullName: "Mark Miller",
  bills: [77, 375, 110, 45],
  tipCalculator: function() {
    this.tips = [];
    this.finalValues = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.tipCalculator();
mark.tipCalculator();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);


if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}
