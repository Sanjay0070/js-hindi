// Primitive

// 7 types  : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 12345768689403084n

const heros = ["shaktiman", "naagraj", "doga"]
let obj = {
    name : "sanjay",
    age : 23
}

const myFunctoin = function(){
    console.log("Hello");
}

console.log(typeof outsideTemp);


// Reference (Non primitive)

// Array, Objects, Functions