function Sum<T>(value:T):T{
    return value
}
console.log(Sum<string>('hello'))
console.log(Sum<number>(3))


function Arr<T,U>(a:T,b:U):[T,U]{
    return [a,b]
}
console.log(Arr<string,number>('hello',3))


function Group<T>(arr:T[]):T[]{
    return arr
}
console.log(Group<number>([1,3,4,5,6]))