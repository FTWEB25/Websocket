const {EventEmitter}=require("events")

const player=new EventEmitter()

let health=100
player.on("died",()=>{
    console.log("Game Over!!!")
})

player.on("shot",()=>{
   health-=50
   console.log("Enemy !!!",health)
   if(health<=0){
     player.emit("died")
   }
})

player.on("food",()=>{
    health+=10
    console.log(health,"health restored")
})

player.emit("shot")
player.emit("food")
player.emit("shot")
player.emit("food")
player.emit("shot")