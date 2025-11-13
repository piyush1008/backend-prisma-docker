import { Prisma } from "@prisma/client";
import express from "express";
import { prisma } from "./db.js";


const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("container is up")
})  


app.get("/users",(req,res)=>{
    res.send("users")
})  


app.post("/user",async(req,res)=>{
    try {
        const {username, password}=req.body;
        await prisma.user.create({
            data:{
                username, 
                password
            }
        })

        res.json({
            message: "user is sign up "
        })
    } catch (error) {
        console.log(error);
    }
})


app.get("/getAlluser", async(req, res)=>{
    const alluser=await prisma.user.findMany()

    return res.json({
        alluser
    })
})




app.listen(8000);