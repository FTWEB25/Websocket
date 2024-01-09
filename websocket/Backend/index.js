const {WebSocketServer}=require("ws")
const wss=new WebSocketServer({port:8080})


wss.on("connection",(socket)=>{
    
    socket.on("message",(msg)=>{
        msg=msg+""
        console.log(msg)
        socket.send("GOod bye")
    })
})