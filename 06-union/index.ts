let score: number | string = 44

score = 55

score = "fourth"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let userType: User | Admin = {name: "saiful", id: 4455}

userType = {username: "admin123", id: 887}

function getId(id: number | string) {
    console.log(`DB id is ${id}`)

    if(typeof id === "string") {
        id.toLowerCase()
    }

    if(typeof id === "number") {
        id+2
    }
}

getId(3)
getId("3")

// arrays
// const data: number[] = [1,2,3,"4"] //string not allowed
// const data2: string[] = [1,2,3,"4"] //number not allowed
const data3: (string | number | boolean)[] = [1,2,3,"4", true] //multiple type define

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "middle"
// seatAllotment = "crew" //this is not acceptable beacause type is not defined