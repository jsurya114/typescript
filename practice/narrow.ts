function Check(value:string|number){
    if(typeof value==='string'){
       return  value.toUpperCase()

    }else{
        return value+2
    }
}

console.log(Check("3"))




let str:any='hello'
let leng = (str as string).length
console.log(leng)

export {}