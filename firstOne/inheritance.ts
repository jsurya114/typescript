class Person{
    name:string

    constructor(name:string){
        this.name=name
    }
    sayHello(){
        console.log(`hi i am ${this.name}`)
    }
}

class Student extends Person{
    rollnumber:number
    constructor(name:string,rollnumber:number){
        super(name)
        this.rollnumber=rollnumber
    }
}

let detail=new Student('Jayasurya',101)
detail.sayHello()
export {}