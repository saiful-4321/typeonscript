let User: [string, number, boolean]

User = ["saiful", 100, true] //Tuples restrict the array element type as well
// User = [100, false, "saif"] //cant use with wrong data type elments

type User = [number, string]

const newUser: User = [112, "saif@gmail.com"]

newUser[1] = "oops.com" //will replace index wise value

let myTuple = [1, 2, 3];
myTuple = [...myTuple, 4, 5];
console.log(myTuple)

export {}