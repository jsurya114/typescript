function Logger(constructor:Function){
    console.log('class created',constructor.name)
}
@Logger
class Person{
    name='john'
}
