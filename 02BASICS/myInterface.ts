interface User {
    readonly id: number,
    name: string,
    email: string,
    isActive: boolean,
    //startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const arpan: Admin = {id: 1, name: "arpan", email: "a@gmail.com", isActive: false,githubToken: "github", role: "admin", 
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "arpan", value: 50) => {
    return 100
}
}


arpan.email = "b@gmail.com"



export {}