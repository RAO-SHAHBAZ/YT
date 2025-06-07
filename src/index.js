import 'dotenv/config'
import connectDB from "./db/db.js";
import { app } from './app.js';
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server Is Running on Port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MongoDb Connection Failed!!! " ,err)
})
/*
import express from "express"
const app = express()
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error)=>{
            console.log("Error :", error);
            throw error
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App is Listing ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error: ",error)
        throw error
    }
})()

*/