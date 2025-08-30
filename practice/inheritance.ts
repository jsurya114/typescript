class School{
    name:string
    
    constructor(name:string){
        this.name=name
    }
}
class Student extends School{
    age:number
    constructor(name:string,age:number){
        super(name)
        this.age=age
    }
    showDetails(){
        console.log(`This is ${this.name} and age is ${this.age}`)
    }
}
const stud = new Student('Jayasurya',23)
stud.showDetails()
export {}
