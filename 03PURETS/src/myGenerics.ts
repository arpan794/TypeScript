const scores: Array<number> = [];   
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<type>(val: type): type {
    return val
}

// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "coke", type: 2})

function getSearchProducts<T>(products: T[]): T | undefined {
    const myIndex = 3;
    //return products[myIndex]!;   the '!' says "I know it’s not undefined"
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T | undefined => {
    const myIndex = 3;
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object{
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3, { connection: "localhost", username: "admin", password: "password" })

// anotherFunction (3, "4")

interface Quizze {
    name: string,
    type: string
}

interface Course {  
    name: string,
    type: string,
    module: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}