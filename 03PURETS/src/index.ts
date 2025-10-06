// class User {
//     public email: string
//     name: string
//     private readonly city: string = "banglore"
//     constructor (email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

class User {

    protected _courseCount = 1
    private readonly city: string = "banglore"
    constructor (
        public email: string, 
        public name: string
        ){
    }

    private deleteToken(){
        console.log("Token Deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){ 
        if(courseNum <= 1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const arpan = new User("a@gmail.com","arpan")
// arpan.city
//arpan.city = "delhi"

arpan.courseCount = 3

