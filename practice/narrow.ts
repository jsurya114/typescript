function Check(value:string|number){
    if(typeof value==='string'){
       return  value.toUpperCase()

    }else{
        return value+2
    }
}

console.log(Check("3"))

export {}