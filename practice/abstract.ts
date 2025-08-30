// abstract class Vehicle{
//     abstract drive(): void
// }
// class Car extends Vehicle{
//     drive(): void {
//         console.log("🚗 Car is driving on the road...")
//     }
// }

// class Bike extends Vehicle{
//     drive(): void {
//         console.log("🏍️ Bike is zooming through traffic...")
//     }
// }

// const car = new Car()
// car.drive()

// const bike = new Bike()
// bike.drive()



// export {}

//another
interface Payment{
    pay(amount:number):void
}

class creditcard implements Payment{
    pay(amount:number){
         console.log(`Paid ₹${amount} using Credit Card`);
    }
}
class Upi implements Payment{
    pay(amount:number){
         console.log(`Paid ₹${amount} using upi`);
    }
}

let pays:Payment
pays=new creditcard()
pays.pay(500)

pays=new Upi()
pays.pay(500)
export {}
