const User = {
    name: "Saiful",
    email: "bd.saif321@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {
    // console.log(name)
    // console.log(isPaid)
}

createUser({name: "saiful", isPaid: false})

// let extrUser = {name: "saiful", email: "saif@gmail.com", isPaid: true}

// createUser(extrUser)

// Initiate type object as return type
function createCourse(): {name: string, price: number} {
    return {name: "Abul", price: 100}
}
export {}