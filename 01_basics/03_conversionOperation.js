let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber );

// "33" => 33
// "33abc" => NaN
// true =>1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => ture; 0 => flase
// "" => false
// "Sanjay" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *************************Operation*******************************

let value = 3
let negValue = -value

console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);


let str1 = "hello"
let str2 = "sanjay"

let str = str1 + str2

console.log(str);

console.log(1+"3");
console.log("1"+3);
console.log(1+1+"3");
console.log("1"+1+3);