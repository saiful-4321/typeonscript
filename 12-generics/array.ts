function getSearchProducts<Type>(products: Type[]): Type {
    return products[3]
}

const getSearchedLatestProducts = <Type>(products: Type): Type => {
    // do some db operations
    let index = 4
    return products[index]
}