// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sanjay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Sanjay",
            lastname:"Nishad"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "b"}

// const obj3 = {obj1, obj2}

// obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id : 1
    },
    {
        
    }
]

user[1].email

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnproperty('isLoggedIn'));