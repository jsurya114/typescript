class Grand{
    dad():void{
        console.log('86 year')
    }
}
class Parent extends Grand{
    dad(){
        console.log('55 year old')
    }
    son(){
        console.log('i have a son')
    }
}

class Child extends Parent{
    son(){
        console.log('i am his son')
    }
    duaghter(){
        console.log('i am her daughter')
    }

}
let c= new Child()
c.dad()
c.duaghter()
c.son()