// Multiple datatype assigning
let result: number | string = 3.49
result = 55
result = "fourth"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

// Multiple type assigning
let userType: User | Admin = {name: "saiful", id: 4455}

// we can use different type aswell
userType = {username: "admin123", id: 887}

// define multiple type while taking params 
function getId(id: number | string) {
    console.log(`DB id is ${id}`)

    // doing type specific functionalities
    if(typeof id === "string") {
        id.toLowerCase()
    }

    if(typeof id === "number") {
        id.toString()
    }
}

getId(3)
getId("3")

// arrays
// const data: number[] = [1,2,3,"4"] //string not allowed
// const data2: string[] = [1,2,3,"4"] //number not allowed
const data3: (string | number | boolean)[] = [1,2,3,"4", true] //multiple type define

let position: "aisle" | "middle" | "window"

position = "middle"
// position = "crew" //this is not acceptable beacause type is not defined