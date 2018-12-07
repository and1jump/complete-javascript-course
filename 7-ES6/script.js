///////////////////////////////////////
// let and const

// ES5
/*
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6

const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6);


// ES5

function driverLicence5(passedTest) {
  if (passedTest) {
    // console.log(firstName);

    var firstName = "Dan";
    var yearOfBirth = 1995;
  }

  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  );
}

driverLicence5(true);

// ES6

function driverLicence6(passedTest) {
  //   console.log(firstName);

  let firstName = "Dan";
  const yearOfBirth = 1995;

  if (passedTest) {
    firstName = "Dan";
  }

  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  );
}

driverLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/

////////////////////////////////////////
// Block and IIFEs

// ES6
/*
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b);
console.log(c);

// ES5

(function() {
  var c = 3;
})();

// console.log(c);
*/

////////////////////////////////////////
// Strings

/*
let firstName = "Dan";
let lastName = "Smith";
const yearOfBirth = 1995;

function calcAge(year) {
  return 2018 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6

console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("D"));
console.log(n.endsWith("h"));
console.log(n.includes(" "));
console.log(`${firstName} `.repeat(5));
*/

////////////////////////////////////////
// Arrow functions

/*

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return 2018 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);

/////////////////////////////////////////

// ES5

var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};

// box5.clickMe();

// ES6

const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      let str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};

box6.clickMe();

/////////////////////////////////

function Person(name) {
  this.name = name;
}

// ES5

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );

  console.log(arr);
};

var friends = ["Victor", "Alex", "Nastya"];

new Person("Dan").myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {
  let arr = friends.map(el => `${this.name} is friends with  ${el}`);

  console.log(arr);
};

const friends = ["Victor", "Alex", "Nastya"];

new Person("Dan").myFriends6(friends);

*/

////////////////////////////////////////
// DESTRUCTURING

/*

//// Arrey

// ES5
var john = ["Dan", 23];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ["Dan", 23];

console.log(name);
console.log(age);

//// Object

// ES6
const obj = {
  firstName: "Dan",
  lastName: "Piro"
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(firstName);
console.log(lastName);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1995);
console.log(age);
console.log(retirement);

*/

////////////////////////////////////////
// Arrays

/*

const boxes = document.querySelectorAll(".box");

//ES 5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue";
});

// ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

// Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

// LOOP

// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === "box blue") {
//     continue;
//     // break;
//   }

//   boxesArr5[i].textContent = "I changed to blue!";
// }

// ES6

for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }

  cur.textContent = "I changed to blue!";
}

/////////////////////////////////////

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

let arr = [1, 2, "dan"];

const [age1, age2, name] = arr;

console.log(age1, age2, name);

*/

///////////////////////////////////////////
// Spread operator

/*

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21];

//ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familySmith, ...familyMiller, "Dan"];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

console.log(all);

Array.from(all).forEach(cur => (cur.style.color = "purple"));

*/

///////////////////////////////////////////
// Rest parameters

/*

//ES5

function isFullAge5() {
  //console.log(arguments);

  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log(2018 - cur >= 18);
  });
}

//isFullAge5(1990, 2005, 1965);
//isFullAge5(1990, 2005, 1965, 2016, 1976);

//ES6

function isFullAge6(...years) {
  years.forEach(cur => console.log(2016 - cur >= 18));
}

isFullAge6(1990, 2005, 1965);

*/

//ES5
/*
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log(2018 - cur >= 18);
  });
}

isFullAge5(21, 1990, 2005, 1965);
//isFullAge5(1990, 2005, 1965, 2016, 1976);

//ES6

function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2016 - cur >= limit));
}

isFullAge6(1990, 2005, 1965);

///////////////////////////////////////////
// Default parameters

// ES5

/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "russian")
    : (nationality = nationality);

  
}


// ES6

function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var dan = new SmithPerson("Dan", 1995);
var emily = new SmithPerson("Emily", 1990, "Diaz", "spanish");

///////////////////////////////////////////
// Maps

const question = new Map();

question.set(
  "question",
  "What is the official name of the lateste major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answet :D");
question.set(false, "Wrong, please try again!");

console.log(question.get("question"));
// console.log(question.size);

// if (question.has(4)) {
//   question.delete(4);
// }
// question.clear(); delete all

// question.forEach((value, key) =>
// console.log(`This is ${key}, and it's set to ${value}`)
// );

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Wright the correct answer"));
console.log(question.get(ans === question.get("correct")));
*/

///////////////////////////////////////////
// Classes

// ES5

/*

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};

var john5 = new Person5("John", 1990, "teacher");

//ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log("Hey there!");
  }
}



Person6.greeting();

*/

///////////////////////////////////////////
// Classes and Subclasses

// ES5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();

//ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calcAge();

