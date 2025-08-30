type cardNumber={
    cardnumber:number
}
type cardHolder={
    cardholder:string
}
type cardCvv={
    cardcvv:number
}
type cardDetails=cardHolder & cardNumber & cardCvv

const myCard:cardDetails={
    cardholder:'Jayasurya S',
    cardnumber:445590232233,
    cardcvv:321
}
console.log(myCard)
export {}
