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

//arow functions
const data = (a, b) => a + b;
