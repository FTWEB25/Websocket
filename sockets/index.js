const http=require("http")
const express=require('express')
const {Server}=require("socket.io")

const app=express()
const httpServer=http.createServer(app)

app.get("/",(req,res)=>{
    res.send("new home page")
})

const io=new Server(httpServer)

httpServer.listen(7070,()=>{
  console.log("connected to the server")
})

io.on("connection",(socket)=>{
    socket.emit("print","this is my first message")
})