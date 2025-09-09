interface Account{
    name:string
    amount:number
   acc_type():void
}

interface Balance{
    balance():void
}
class Citizen implements Account,Balance{
    name: string
    amount: number
    constructor(sname:string,iamount:number){
    this.name=sname
    this.amount=iamount
    }
    acc_type(){
        console.log(`savings account of ${this.name}`)
    }
    balance(){
      console.log(`balance of ${this.name}'s account is ${this.amount}rs`)
    }
}
let person = new Citizen('Jayasurya',5000)
person.acc_type()
person.balance()