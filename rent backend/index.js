const express = require("express")
const app = express();
const cors= require("cors")
const users=require("./user")

require("./config")
app.use(express.json())


app.use(cors())

app.post("/register", async (req,resp)=>{
    let data = new users (req.body)
    let result = await data.save()
    result = result.toObject();
    delete result.password
    resp.send(result)
})

app.post ("/login", async (req, resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email)
    {
        let user = await users.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        }
        else {
            resp.send({result:"No user found "})
        }   
    }
    else{
        resp.send({result:"No user foundo"})
        }
    })



    app.listen(5000)