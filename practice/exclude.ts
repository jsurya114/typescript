type union = string|number|boolean
type extract = Exclude<union,string>
let a : extract = 23

console.log(a)



interface Model{
    name:string
    year:number
}
type noYear=Omit<Model,'year'>
let Cars:noYear={
    name:'Mustang'
}
console.log(Cars)

