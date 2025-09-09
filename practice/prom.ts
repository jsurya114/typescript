function Msg(success:any):Promise<boolean|number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof success ==='boolean'){
                resolve(true)
            }else{
                reject(404)
            }
        },1000)
    })
}

async function run() {

try {
  let data  = await Msg('string')  
  console.log(data)
} catch (error) {
    console.log(error)
}
    
}
run()