// Function without explicit return type -> TypeScript infers as string
function numbers(num:number){
    return 'hello'  
}

// Function with string input and string output
function values(str:string){
    return str.toUpperCase()
}

numbers(2)
values('hi this is jayasurya')

// Function with 3 parameters
function Users(name:string,email:string,isPaid:boolean){
}
Users('Jayasurya','jayasurya@gmail.com',false)

// Arrow function with default parameter
let newUsers = (name:string, email:string, isPaid:boolean=false) => {
}
newUsers('Suryadas','suryadas@gmail.com')

// Arrays with inferred types
let developers = ['manoj','jayasurya','akash']   // string[]
let count = [1,2,3]                              // number[]

// Correct usage of forEach (for side effects, not return)
developers.forEach((them: string) => {
    console.log(`developer is ${them}`)
})

count.forEach((counts: number) => {
    console.log(counts)
})

export {}
