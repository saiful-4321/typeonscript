"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function toUpper(str) {
    return str.toUpperCase();
}
function signupUser(name, email, age, isValid) { }
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signupUser("saiful", "saiful@gmail.com", 30, false);
loginUser("saif@gmail.com", "1234");
// return type define
function plusTwo(num) {
    //return "Hello" //Getting error while trying to return different data type 
    return num + 2;
}
console.log(plusTwo(3));
// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
// using type while doing arrow function
var sayHello = function (str) {
    return "";
};
var heroes = ["Thor", "spiderman", "ironman"];
// using type while doing callback
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
// when you need to return empty
function consoleError(errMsg) {
    console.log(errMsg);
}
// never used when you dont need to return anything 
//Error used to throw an exception and terminates the execution of the program
function handleError(errMsg) {
    throw new Error(errMsg);
}
