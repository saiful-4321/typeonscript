let score: Array<number> = [0,10]

let names: Array<string> = ["soccer", "cricket"]

function identityOne(val: number | boolean): number | boolean {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T {
    return val
}

identityFour("return val") // will place type string and return return val

interface Bottle {
    brand: string,
    weight: number
}

function identityFive<Bottle>(val: Bottle): Bottle {
    return val
}

identityFive({brand: "mum", weight: 500})

export{}