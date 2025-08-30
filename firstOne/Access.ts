type User ={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number
}
let customer:User|Admin={
    name:'Jayasurya',
    id:224
}
customer={
    username:'JS',
    id:224
}


let data1:number[]=[1,2,3]
let data2:string[]=['1','2','3']
let data3:(string|number|boolean)[]=['1',2,false]

let seatAllotment :'front'|'middle'|'back'
seatAllotment='front'
// seatAllotment='not allowcated' this should be error becoz its not assignable to type '"middle" | "front" | "back"'.

export {}