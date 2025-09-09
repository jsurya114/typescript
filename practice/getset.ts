class Persons{
    private name:string
    constructor(sname:string){
        this.name=sname
    }
    get sname(){
        return this.name
    }
    set sname(newName:string){
        if(newName.length>0){
            this.name=newName
        }
    }
}
let p = new Persons('jay')
console.log(p.sname)
p.sname='Surya'
console.log(p.sname)
