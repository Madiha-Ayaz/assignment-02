"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 11
//Create a new array named citrusFruits that contains the first
//two elements of the fruits array using the method.
const fruits = ["apple", " orange", "mango", "kiwi", "grapes"];
const citrusFruits = fruits.splice(0, 2);
console.log(citrusFruits);
