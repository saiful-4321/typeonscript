class User {
    public name: string
    email: string //automatically marked as public
    private readonly city: string = "Dhaka"
    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

class anotherUser {
    readonly city:string = "ctg"
    constructor(public name: string, private email: string) { }

    private logError(error) {
        console.log(error)
    }

    // this.logError("basic error")
}

let newUser = new User("saiful", "saiful@gmail.com")

export {}