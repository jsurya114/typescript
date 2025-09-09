function Variadi(...nums:number[]):number{
    return nums.reduce((acc,num)=>acc+num,0)
}

console.log(Variadi(1,2,3,4,5))