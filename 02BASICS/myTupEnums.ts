// const user: (string | number)[] = [1, "arpan"]
let user: [string, number, boolean] = ["arpan", 22, true];

let rgb: [number, number, number] = [255, 0, 0]

type User = [number, string]

const newUser: User = [1, "arpan"]

newUser[1] = "john"

//newUser.push(true)  // will give error

export {}