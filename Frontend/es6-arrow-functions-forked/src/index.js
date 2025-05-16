import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(x => x * 2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(num => num < 10);
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber)
console.log(newNumber);

////Find - find the first item that matches from an array.
const newNumber1 = numbers.find(num => num > 10)
console.log(newNumber1);

////FindIndex - find the index of the first item that matches.
const newNumber2 = numbers.findIndex(num => num > 10)
console.log(newNumber2);
