var v = 10;
let l = 20;
const c = 30.3;

var browser = "chrome";
var browser = "firefox"; // re-declaration is allowed for var
browser = "edge"; // re-assignment is allowed for var

let city = "pune";
// let city="mumbai"; // re-declaration is not allowed for let

//for , functions

var testcases = ["login", "logout", "signup"];
for (var i = 0; i < testcases.length; i++) {
    console.log(testcases[i]);
}

console.log("loop counter leaked outside the loop: " + i); // i is accessible outside the loop

console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from function");
}

say();
say();

console.log("Hi");  