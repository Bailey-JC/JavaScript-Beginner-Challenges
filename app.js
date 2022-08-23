// Q1 - Sum of 2 numbers

function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(4, 5));

// Q2 - Convert hours into seconds

function hoursIntoSeconds(hour) {
  return hour * 3600;
}

console.log(hoursIntoSeconds(24));

// Q3 - Calc perimeter of a rectangle

function calcPerimeter(length, width) {
  return 2 * (length + width);
}

console.log(calcPerimeter(10, 20));

// Q4 - Calc area of triangle

function calcAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(20, 20));

// Q5 - Extend a String

function AddFrontend(string) {
  return string + "Frontend";
}

console.log(AddFrontend("Orange"));

// Q6 - Return true if greater than 100

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}

console.log(sumGreaterThan100(50, 200));

// Q7 - Return true if less than or equal to zero

function lessThanOrEqualToZero(num1) {
  return num1 <= 0;
}

console.log(lessThanOrEqualToZero(-5));

// Q8 - Oposite of boolean

function oppositeBoolean(text) {
  return !text;
}

console.log(oppositeBoolean(false));

// Q9 - Return true if not equal to zero

function isNotZero(num) {
  return num !== 0;
}

console.log(isNotZero(5));

// Q10 - Calc remainder

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(4, 10));

// Q11 - Return true if odd

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(16));

// Q12 - If even, return 1, otherwise return -1

function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

// Instead of
if (num % 2 === 0) {
  return 1;
} else return -1;

console.log(booleanInteger(2));

// Q13 - Check if a user is logged in AND subscribed (&&)

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" && subscribed === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));

// Q14 - Check if a user is logged in OR subscribed (||)

function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === "LOGGED_IN" || subscribed === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
