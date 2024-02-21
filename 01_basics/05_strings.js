const name = "Sanjay"

const repoCount = 2

// console.log(name + repoCount + "Nisahd");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nishad')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,2)
console.log(anotherString);

const newStringOne = "  Sanjay  "
console.log(newStringOne.trim());

const url = "https://san.com/sanjay%20nayak"


console.log(url.replace('%20', '-'));

console.log(url.includes('sanjay'));

// split()