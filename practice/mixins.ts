class Walk {
    canWalk(){
        console.log('i can eat')
    }
}

class Eat{
    canEat(){
        console.log('i can walk')
    }
}
class Person{}

interface Person extends Walk,Eat{}
Object.assign(Person.prototype,Walk.prototype,Eat.prototype)

const person = new Person()
person.canEat()
person.canWalk()

export {}