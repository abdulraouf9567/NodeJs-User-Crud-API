import express from 'express'
import usersRoutes from './routes/users.js'
import { v4 as uuidv4 } from 'uuid';

const app=express()
const PORT = 5001

app.use(express.json())

console.log("UUID:",uuidv4())

app.use('/users',usersRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to users API - V1.0");
})

app.get("*",(req,res)=>{
    res.status(404)
        .json({Error:"Not Found"})
})

app.listen(PORT,()=>console.log(`Server is listening at port: http://localhost:${PORT}`))