// import animals, {useAnimals} from "./data";
// console.log(animals);

// const [cat, dog] = animals;
// // console.log(useAnimals(cat));

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();


// const {name, sound,feedingRequirements:{food, water}} = cat;
// console.log(food);

// const {name: catName, sound: catSound} = cat;
// console.log(catName);
// console.log(catSound);

// const {name="Fluffy" , sound="miaou"} = cat;
// console.log(name);
// console.log(sound);



// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);
const [honda, tesla] = cars;
const {coloursByPopularity:[hondaTopColour],speedStats:{topSpeed:hondaTopSpeed}}=honda;
const {coloursByPopularity:[teslaTopColour],speedStats:{topSpeed:teslaTopSpeed}}=tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
