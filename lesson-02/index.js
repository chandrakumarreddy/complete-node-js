let name = "MAX"; //string
let age = 21; //number
let married = false; //boolean

//pure functions=> depends only on arguments passed.no interaction with outside code or with api's,databases etc

function pureFunction(a, b, c) {
	return "a value is " + a + ",b value is " + b + ",c value is " + c;
}

console.log(pureFunction(2, 3, 4));

//arrays and objects

const data = [1, 2];

//array mutation opertaions (not recommended to use in real world)
data.push(3);
// console.log(data);
data.pop();
// console.log(data);
data.shift();
// console.log(data);
data.unshift(0);
// console.log(data);

//recommended mutation operations to use in real world

[1, 2, 3, 4].forEach(item => console.log(item)); //output:- 1,2,3,4 loops through an array(limits the scope,easy to use and better readability)
["red", "green", "blue"].find(item => item === "blue");
//uncommet this to see output console.log(["red", "green", "blue"].find(item => item === "blue"));
//output:- blue => use when single element is required
[1, 2, 3].map(item => item * 2);
// uncommet this to see output console.log([1, 2, 3].map(item => item * 2));
// output:- [2,4,6] => use to transform the elements in an array
[1, 2, 3].reduce((total, a) => total + a);
// uncommet this to see outputconsole.log([1, 2, 3].reduce((total, a) => total + a));
// 6 => use when you want single value from an elements in an array
[1, 2, 3].filter(item => item > 1);
// uncommet this to see output console.log([1, 2, 3].filter(item => item > 1));
//[2,3] => use to select subset of an array

// simple objects and mutation operations
const obj = { a: 1, b: 2, c: 3 };
obj.name = "chandra";

//arrow functions
const data1 = (a, b) => a + b; //console.log(data(2,3))

//object and pitfalls
//object functions
const person = {
	name: "chandra",
	age: 21,
	greet: () => {
		console.log(`I'm ${this.name}`);
	},
	greet1() {
		console.log(`I'm ${this.name}`);
	}
};

console.log(person.greet()); //output :- "I'm undefined"
console.log(person.greet1()); //output :- "I'm chandra"

//how objects and arrays are references
const hobbies = ["a", "b"];
hobbies.push("c");
console.log(hobbies); //output:- ['a','b','c'] here we are not seeing error because hobbies is pointing to address where array is stored.we are changing data at address but not the address this shows arrays are refernces


