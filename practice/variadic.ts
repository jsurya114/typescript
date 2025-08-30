function Variadic(...nums:number[]):number{
    return nums.reduce((acc,num)=>acc+num,0)
}

console.log(Variadic(1,2,3,4,5))