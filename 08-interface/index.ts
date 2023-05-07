interface User {
    readonly id: number
    email: string,
    userId: number
    googleId?: string
    // startTrial: () => string //way of defining method
    startTrial(): string //another way of defining
    getCupon(cuponname: string, value: number) : number
}




const user: User = {
    id: 1, email: "saiful@gmail.com", 
    userId: 221, 
    startTrial: () => {return "Trial started"},
    getCupon(name: "tenonten", value: 100) {
        return 100
    },
}

user.email = "samim@gmail.com"