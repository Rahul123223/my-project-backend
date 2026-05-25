const express = require("express")

const app = express()

app.use((req,res)=>{
    res.send("Helllo from the server")
})

app.use("/",(req,res)=>{
    res.send("hello from rahul")
})

app.use("/hello",(req,res)=>{
    res.send("hello ")
})

app.use("/test",(req,res)=>{
    res.send("hello from test")
})

app.listen(4000,()=>{
    console.log("server is 304000000 on")
})