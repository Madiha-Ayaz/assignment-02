"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 12
//Create a new array named lastTwoFruits that contains the last
//two elements of the fruits array using the method.
const Fruits = ["mango", "orange", "kiwi", "pineapple", "banana"];
const lastTwoFruits = Fruits.splice(3, 4);
console.log(lastTwoFruits);
