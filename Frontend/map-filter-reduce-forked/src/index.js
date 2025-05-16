import emojipedia from "./emojipedia"
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// 3 façons d'ecrire une fonction de la moin a la plus simplifiée
//---------------------------------------------------------------------
//------on boucle dans un tableau et pour chaque entrée, on effectue la fonction double
function double(x) {
    return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers)
//---------------------------------------------------------------------
//------ meme chose mais on integrie directement la fonction double dans comme callback de notre fonction map, la fonction double devient anonyme
const newNumbers2 = numbers.map(function(x) {
    return x * 2;
});
console.log(newNumbers2)
//---------------------------------------------------------------------
//-----On simplifie encore en utilisant les fonction flechées
const newNumbers3 = numbers.map((x => x * 2)
);
console.log(newNumbers3)

//Filter - Create a new array by keeping the items that return true.

const tabFilter = numbers.filter((num => num > 10));
console.log(tabFilter);

//Reduce - Accumulate a value by doing something to each item in an array.
console.log(numbers);
const result = numbers.reduce(function(x, y){
    console.log(`${x} + ${y}`);
    return x + y;
}
);
console.log(result);

//Find - find the first item that matches from an array.
console.log(numbers);
const firtValueTrue = numbers.find((x => x < 10));

console.log(firtValueTrue);

//FindIndex - find the index of the first item that matches.
console.log(numbers);
const firtIndexTrue = numbers.findIndex((x => x === 5));

console.log(firtIndexTrue);
//---------------------------------------------------------------------

const tabOfDescriptionTronc100Char = emojipedia.map((emojiEntry => emojiEntry.meaning.substring(0, 100)));
console.log(tabOfDescriptionTronc100Char);


