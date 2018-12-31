//pure functions=> depends only on arguments passed.no interaction with outside code or with api's,databases etc

function pureFunction(a, b, c) {
return "a value is " + a + ",b value is " + b + ",c value is " + c;
}

console.log(pureFunction(2, 3, 4));

//arrays and objects

//array opertaions (not recommended to use in real world)
data.push(3);
data.pop();
data.shift();
data.unshift(0);

//recommended to use in real world

[1, 2, 3, 4].forEach(item => console.log(item));
["red", "green", "blue"].find(item => item === "blue");
[1, 2, 3].map(item => item \_ 2);
[1, 2, 3].reduce((total, a) => total + a)
(1, 2, 3)
].filter(item => item > 1);

//objects
const obj = { a: 1, b: 2, c: 3 };
obj.name = "chandra";

//arrow functions
const data = (a, b) => a + b;

//object functions
const person={
name:"chandra",
age:21,
greet:()=>{
console.log(`I'm ${this.name}`);
},
greet1(){
console.log(`I'm ${this.name}`)
}
}
person.greet() // I'm undefined because this refers to global scope
person.greet1() // I'm chandra because this refers to person scope

//how objects and arrays are references
const hobbies = ["a", "b"];
hobbies.push("c");
console.log(hobbies); //output:- ['a','b','c'] here we are not seeing error because hobbies is pointing to address where array is stored.we are changing data at address but not the address this shows arrays are refernces

//array modifiers

const newHobbies = hobbies.slice(); // returns new array
newHobbies.splice(0, 1); //modeifeis original array

//rest opeartor and spread operator

const abc=[1,2,3];
const cde=[...abc,4] // output :- [1,2,3,4] => spread operator

const efg=(a,b,c)=>{
console.log([a,b,c])
}

efg(1,2,3) // returns [1,2,3] which is not flexible

const ghi=(...args)=>{
console.log(args)
}
ghi(1,2,3,4) // returns [1,2,3,4] => rest opeartor which is flexible
