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
}

let newUser = new User("saiful", "saiful@gmail.com")