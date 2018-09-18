// let john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };

/*
let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

let john = new Person("John", 1990, "teacher");
let jane = new Person("Jane", 1969, "designer");
let mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create

/*
let personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

let john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

let jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
*/

// Primitives vs objects

// // Primitives
// let a = 23;
// let b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // Objects
// let obj1 = {
//   name: "John",
//   age: 26
// };

// let obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// // Functions

// let age = 23;
// let obj = {
//   name: "Dan",
//   city: "Sochi"
// };

// function change(a, b) {
//   a = 30;
//   b.city = "Amsterdam";
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

////////////////////////////////////////////////////
// Lecture: Passing function as argument

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

////////////////////////////////////////////////////
// Lecture: Functions returning functions

/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you explaine what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

const designerQuestion = interviewQuestion("designer");
const teacherQuestion = interviewQuestion("teacher");
const nameQuestion = interviewQuestion("Dan");

teacherQuestion("Dan");
designerQuestion("Dan");
nameQuestion("Dan");
*/

////////////////////////////////////////////////////
// Lecture: IIFE

/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/

/*
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score());

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

////////////////////////////////////////////////////
// Lecture: Closures

/*
function retirement(retirementAge) {
  var a = " year left until retirement.";
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementIceland(1990);
retirementGermany(1990);
retirementUS(1990);

// retirement(66)(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you explaine what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestion("teacher")("Dan");
interviewQuestion("designer")("Dan");
interviewQuestion("Dan")("Dan");
*/

////////////////////////////////////////////////////
// Lecture: Bind, call and apply

var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "aflernoon"); //call
// john.presentation.apply(emily, ["friendly", "aflernoon"]); //apply

var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");

emilyFormal("morning");
emilyFormal("night");

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
