const express = require("express")

const app = express()

const userData = [{
    firstName : "rahul",
    lastName :"garud",
}]

// app.get("/user",(req,res)=>{
//     res.send(userData)
// })

// app.post("/user",(req,res)=>{
//     res.send("save the data to db")
// })


app.delete("/user",(req,res)=>{
    res.send(userData)
})
 
app.use("/",(req,res)=>{
    res.send("Helllo from the server")
})

app.listen(4000,()=>{
    console.log("server is 4000 on")
})