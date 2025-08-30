interface Engine{
    start():void
}
class PetrolEngine implements Engine{
    start(){
        console.log('PetrolEngine')
    }
}
class ElectricEngine implements Engine{
    start(){
        console.log('ElectricEngine')
    }
}

class Car{
    private engine:Engine
    
    constructor(engine:Engine){
        this.engine=engine
    }
    drive(){
        this.engine.start()
    }
}
let p = new Car(new PetrolEngine())
p.drive()

let e = new Car(new ElectricEngine())
e.drive()







export {}