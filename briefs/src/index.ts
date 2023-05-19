function printName(name: string) {
    console.log(name)
}

printName("another name")

function calculatePrice(price: number): number {
    // return (price + (price * 0.18)).toFixed(1) //this will return string so not going to work
    return (price + (price * 0.18))
}

const toyPrice: number = calculatePrice(100)
const carPrice: number = toyPrice / 2