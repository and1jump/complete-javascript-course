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
