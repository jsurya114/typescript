
// Define an interface
interface Person {
    name:string,
    age:number
}

// Create an object that follows the interface
const user:Person={
    name:'Jayasurya',
    age:23
}
// This will cause error because 'age' is missing
// const user2:Person={
//     name:'JS'
// }


//with function
interface Car {
    name:string
    brand:string
    model:number
}
function newCar(car:Car){
    console.log(`car:${car.name},${car.brand},${car.model}`)
}

const info:Car={
    name:'Mustang',
    brand:'Ford',
    model:1969
}
newCar(info)
export {}