function addES5 (num1,num2){
  return num1+num2;
};

const addES6 = (num1,num2) => {
  return num1+num2;
};

// can do : let functionName = function(num1,num2){ return num1+num2 };
// can do : let functionName = function(num1,num2){ return num1+num2}


function sayHello() {
  console.log("Hello!")
}

function sayGoodbye() {
  console.log("Goodbye!")
}

function outerFunction(innerFuction) {
  innerFuction();
}
// outerFunction is called Higher Order Function;
// innerFuction is called a Callback;

//outerFunction(sayHello);
// "Hello!"
//outerFunction(sayGoodbye);
// "Goodbye!"

const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const concat = (num1,num2) => num1 + '' + num2;

const combine = (arg1, arg2, inFunction) => {
  let result = inFunction(arg1, arg2)
  console.log("1st argument : ", arg1, "\n2nd argument : ", arg2, "\nResult = ",result, "\n")
  return result;
};

combine(2, 4, multiply);
combine(2, 4, add);
combine(2, 4, (num1, num2) => num1 + num2); // same as the previous
combine(2, 4, function(num1, num2){return num1 + num2}); // same as the previous
combine(2, 4, concat);


// setInterval(sayHello, 5000);

//setInterval(function(){console.log("Bye")}, 3000);
//setInterval(() => console.log("ByeBye"), 5000);


function forEachElem(arr, callback) {
  let outputArray = [];
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // invoke our callback on each item of the array
    outputArray.push(callback(arr[i]));
  }
  return outputArray;
}

function logValue(num) {
  return (num)
}

const logTriple = function(num) {
  return (num * 3);
}

function logDollarFormattedNum(num) {
  return ("$" + num)
}

let arr = [1, 2, 3];

let result1 = forEachElem(arr, logValue);
// will log: 1, 2, 3

let result2 = forEachElem(arr, logTriple);
// will log: 3, 6, 9

let result3 = forEachElem(arr, logDollarFormattedNum)
// will log: $1, $2, $3
let result4 = forEachElem(arr, (num) => ('@' + num));
let result5 = forEachElem(arr, function(num) { return ('#' + num)});

console.log("Result1 : ", result1);
console.log("Result2 : ", result2);
console.log("Result3 : ", result3);
console.log("Result4 : ", result4);
console.log("Result5 : ", result5);


let users = [
  {
    name: "Oziel",
    email: "Oziel@pursuit.org",
    userId: 24601
  },
  {
    name: "Senka",
    email: "Senka@pursuit.org",
    userId: 38217
  },
  {
    name: "Erika",
    email: "Erika@pursuit.org",
    userId: 18104
  },
  {
    name: "Evan",
    email: "Evan@pursuit.org",
    userId: 78293
  }
]

const firstName = (obj) => {return obj["name"]}; // have to put the cotations for the key !!!

let namesArrays = forEachElem(users, firstName);
console.log(namesArrays);
