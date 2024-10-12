//Primitive Data Type - Call by Value
//7 types
//String
//Number
//Boolean
//Null
//Undefined
//Symbol
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 636363636n
console.log(typeof bigNumber);



//Non-Primitive Data Type or Reference Type

//Arrays
//Objects
//Functions


const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "Rohit",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);

// console.log(typeof heros);
console.log(typeof anotherId);
