class User {
    private _courseCount = 1

    constructor(public email: string){}

    get getEmail():string {
        return `Email: ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(counter) {
        if(counter <= 1) {
            throw Error("course counter should be more then one")
        }

        this._courseCount = counter + 1
    }
}

let newUser = new User("saiful@gmail.com")