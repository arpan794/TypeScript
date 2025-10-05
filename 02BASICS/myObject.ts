// const User = {
//     name: "arpan",
//     email: "arpan@gmail.com",
//     isActive: true  
// }

// function createUser(user: {name: string, isPaid: boolean}){
   
// }

// createUser({"name": "arpan", "isPaid": false});

function createCourse(): {name: string, price: number}{ 
    return {name: "course1", price: 100}
}

// type user = {
//     name: string,
//     email: string,
//     isActive: boolean   
// }

// function createUser(user: user): user {
//     return {name:"",email:"",isActive: true}
// }

// createUser({name:"",email:"",isActive: true})


type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditcard?: number   
}

let myUser: User = {
    _id: "12345",
    name: "arpan",
    email: "a@a.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "b@b.com";
// myUser._id = "6789";

export {}