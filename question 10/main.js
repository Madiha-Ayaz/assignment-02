"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 10
//Insert the elements "pineapple" and "pear" at index 2 of the
//fruits array using the method.
const fruitsInsert = ["apple", "mango", "banana", "grapes", "kiwi"];
fruitsInsert.splice(2, 0, "pineapple", "pear");
console.log(fruitsInsert);
