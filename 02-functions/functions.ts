function addTwo(num: number) {
    return num + 2
}
addTwo(5)

function toUpper(str: string) {
    return str.toUpperCase()
}

function signupUser(name: string, email: string, age: number, isValid: boolean) { }
let loginUser = (email: string, password: string, isPaid: boolean = false) => {}

signupUser("saiful", "saiful@gmail.com", 30, false)
loginUser("saif@gmail.com", "1234")

// return type define
function plusTwo(num: number): number {
    //return "Hello" //Getting error while trying to return different data type 
    return num + 2
}
console.log(plusTwo(3))

// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

// using type while doing arrow function
const sayHello = (str: string): string => {
    return ""
}

const heroes = ["Thor", "spiderman", "ironman"]

// using type while doing callback
heroes.map((hero): string => {
    return `Hero is ${hero}`
})

// when you need to return empty
function consoleError(errMsg: string): void {
    console.log(errMsg)
}

// never used when you dont need to return anything 
//Error used to throw an exception and terminates the execution of the program
function handleError(errMsg: string): never {
    throw new Error(errMsg)
}


export{}