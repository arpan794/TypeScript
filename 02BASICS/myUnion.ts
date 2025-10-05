let score: number | string = 33;
score = 44;
score = "55";   

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let arpan: User | Admin = {name: "arpan", id: 123};
arpan = {username: "arpan123", id: 456};

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// array

const data: number[] = [1,2,3];
const data2: string[] = ["1","2","3"];
const data3: (string | number)[] = [1,"2",3]; 


export {};