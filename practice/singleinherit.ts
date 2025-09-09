class Engine{
    start():void{
        console.log('condition is good')
    }
}
class Car extends Engine{
    middle() {
        console.log('car engine is good')
    }
    stop(){
        console.log('car engine stopped')
    }
}

let V=new Car()
V.start()
V.middle()
V.stop()
