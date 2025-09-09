type Alltypes=string|number|boolean
type stringOnly=Extract<Alltypes,string>
type numOnly=Extract<Alltypes,number>

let username:stringOnly='Jay'
console.log(username)




interface Users{
    name:string
    age:number
}

type Person=Extract<keyof Users,string>
let sname:Person='name'

