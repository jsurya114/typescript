namespace Animal{
    export class Dog{
        bark(){
            console.log('dogs')
        }
    }
    export class Cat{
        sound(){
            console.log('cat')
        }
    }
}
namespace Pets{
    export class Dog{
        bark(){
            console.log('puppies')
        }
    }
    export class Cat{
        sound(){
            console.log('kittens')
        }
    }
}

let d1 = new Animal.Dog()
d1.bark()
let d2 = new Animal.Cat()
d2.sound()

let p1 = new Pets.Dog()
p1.bark()
let p2 = new Pets.Cat()
p2.sound()

export {}