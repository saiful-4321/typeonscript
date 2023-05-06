let User: [string, number, boolean]

User = ["saiful", 100, true] //Tuples restrict the array element type as well
// User = [100, false, "saif"] //cant use with wrong data type elments

let rgb: [number, number, number] = [255, 123, 432]

type User = [number, string]

const newUser: User = [112, "saif@gmail.com"]

newUser[1] = "oops,com"

export {}