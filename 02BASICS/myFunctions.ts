function addTwo(num: number): number{
    return num + 2;
   // return "arpan";
}

addTwo(5);

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    return;
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


export {};