interface Products{
    id:number
    name:string
    count:number
    block:boolean
}

type items=Pick<Products,'id'|'block'>
let purchase:items={
    id:23,
    block:false,
    // count:23  this should be wrong
}
console.log(purchase)
