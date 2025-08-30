class Bank{
    private balance:number

    constructor(amount:number){
      this.balance=amount//accessible here
    }

    getBalance():number{
        return this.balance
    }
    deposit(amount:number){
        this.balance+=amount
    }
}
let account=new Bank(1000)
console.log(account.getBalance)
account.deposit(500)
console.log(account.getBalance)

export {}