"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Saiful",
    email: "bd.saif321@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    console.log(name);
    // console.log(isPaid)
}
createUser({ name: "saiful", isPaid: false });
// let extrUser = {name: "saiful", email: "saif@gmail.com", isPaid: true}
// createUser(extrUser)
// Initiate type object as return type
function createCourse() {
    return { name: "Abul", price: 100 };
}
