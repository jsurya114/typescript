// class Bank{
//     private balance:number
//     constructor(initial:number){
//         this.balance=initial
//     }
//     deposit(amount:number){
//         this.balance+=amount
//     }
//     getBalance(){
//         return this.balance
//     }
//     withdraw(amount:number){
//         this.balance-=amount
//     }
// }
// let person=new Bank(200)
// person.deposit(50)

// console.log(person.getBalance())
// person.withdraw(35)
// console.log(person.getBalance())



// abstract class Vehicle {
//     abstract start():void
//     stop(){
//         console.log('Stopped')
//     }
// }
// class Car extends Vehicle{
//     start(){
//         console.log('car engine is start')
//     }
// }
// class Bike extends Vehicle{
//     start(){
//         console.log('bike engine is not working')
//     }
// }
// let drive=new Car()
// drive.start()
// drive.stop()


// interface Payment{
//     pay(amount:number):void
// }
// class creditcard implements Payment{
//     pay(amount:number){
//         console.log(amount,'rs paid through creditcard')
//     }
// }
// class upi implements Payment{
//     pay(amount:number){
//         console.log(amount,'rs paid through upi')
//     }
// }
// let Person:Payment=new creditcard()
// Person.pay(200)
// Person= new upi()
// Person.pay(400)



// class Parent{
//     voice(){
//         console.log('i am his parent')
//     }
// }
// class Child extends Parent{
//     speak(){
//         console.log('i am their child')
//     }
// }

// let p=new Child()
// p.speak()
// p.voice()




// class Animal{
//   breed(){
//       console.log('Animal breed')
//   }
// }
// class Dog extends Animal{
//     breed(){
//         console.log('German')
//     }
// }
// class Cat extends Animal{
//     breed(){
//         console.log('Persian')
//     }
// }
// let animal:Animal[]=[new Dog,new Cat]
// animal.forEach(a=>a.breed())

// function Check(value:string|number){
//     if(typeof value==='string'){
//        return  value.toUpperCase()

//     }else{
//         return value+2
//     }
// }

// console.log(Check("3"))

// export {}