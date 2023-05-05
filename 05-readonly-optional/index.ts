type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditcardDetails?: number //? used like turnery operator here
}

let myUser: User = {
    _id: "1234",
    name: "saiful",
    email: "saif@gmail.com",
    isActive: true
}

myUser.email = "saiful.islam@gmail.com"
// myUser._id = "1234" //can not assign value which is read only


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {cvv: number}


export {}