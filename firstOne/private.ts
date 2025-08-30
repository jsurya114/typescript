class Person{
    private name:string
            email:string
            constructor(name:string,email:string){
                this.name=name
                this.email=email
            }

          getDetail(){
            console.log(`my name is ${this.name} and email id is ${this.email}`)
          }  
}

let p1=new Person('Jayasurya','jay@gmail.com')
p1.getDetail()

export {}