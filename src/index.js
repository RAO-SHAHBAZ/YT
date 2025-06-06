import 'dotenv/config'
import connectDB from "./db/db.js";
connectDB()

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