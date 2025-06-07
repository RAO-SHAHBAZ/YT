import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// FOr Frontend Origin
app.use(cors({
    origin : process.env.CORS_ORIGION,
    Credential : true
}))
app.get('/',(req,res)=>{
    res.send("Hello Rao")
})

export{app}