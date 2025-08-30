abstract class Payment{
    abstract pay(amount:number):void  // rule: every child must have pay()
}

class creditCard extends Payment{
    pay(amount:number){
        console.log(`Amount ${amount} is paid through credicard`)
    }
}

class UpiPayment extends Payment{
    pay(amount:number){
        console.log(`Amount ${amount} is paid through upi payment`)
    }
}

let payment:Payment
payment=new creditCard
payment.pay(1000)

payment=new UpiPayment
payment.pay(2000)

export {}