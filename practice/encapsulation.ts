class BankAccount{
    private balance:number

    constructor(amount:number){
        this.balance=amount
    }
    getbalance():number{
        return this.balance
    }
    deposit(amount:number):void{
        if(amount>0){
            this.balance+=amount
            console.log(` balance:${this.balance}`)
        }else{
            console.log('balance cannot minus')
        }
    }
    withdraw(amount:number):void{
       if(amount>0&&amount<=this.balance){
        this.balance-=amount
        console.log(`balance:${this.balance}`)
       }else{
        console.log('balance cannot minus') 
       }
    }
}


const account = new BankAccount(1000)
console.log(account.getbalance())
account.deposit(100)
console.log(account.getbalance())
account.withdraw(50)
console.log(account.getbalance())


export {}
