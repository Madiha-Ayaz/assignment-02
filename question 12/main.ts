//Question 12
//Create a new array named lastTwoFruits that contains the last
//two elements of the fruits array using the method.
const Fruits:string[]=["mango","orange","kiwi","pineapple","banana"]
const lastTwoFruits:string[]=Fruits.splice(3,4)
console.log(lastTwoFruits)