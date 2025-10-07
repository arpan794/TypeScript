const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
identityFour({ brand: "coke", type: 2 });
function getSearchProducts(products) {
    const myIndex = 3;
    //return products[myIndex]!;   the '!' says "I know it’s not undefined"
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: "localhost", username: "admin", password: "password" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
export {};
