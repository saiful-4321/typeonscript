interface User {
    readonly id: number
    email: string,
    userId: number
    googleId?: string
    // startTrial: () => string //way of defining method
    startTrial(): string //another way of defining
    getCupon(cuponname: string, value: number) : number
}


interface User {
    githubId: string
}

const user: User = {
    id: 1, email: "saiful@gmail.com", 
    userId: 221,
    githubId: "github",
    startTrial: () => {return "Trial started"},
    getCupon(name: "tenonten", value: 100) {
        return 100
    },
}

interface Admin extends User {
    role: "admin" | "superadmin" | "learner"
}

const adminUser: Admin = {
    id: 1, email: "saiful@gmail.com", 
    userId: 221,
    role: "admin",
    githubId: "github",
    startTrial: () => {return "Trial started"},
    getCupon(name: "tenonten", value: 100) {
        return 100
    },
}

user.email = "samim@gmail.com"