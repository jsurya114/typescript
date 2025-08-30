class Animal{
    sound():void{}
}
class Dog extends Animal{
    sound(): void{
        console.log('dog')
    }
}
class Cat extends Animal{
    sound(): void {
        console.log('cat')
    }
}
let animals : Animal[]=[new Dog,new Cat]
animals.forEach(animal=>{
    animal.sound()
})


export {}