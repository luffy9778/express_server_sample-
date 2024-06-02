require("dotenv").config()
const express=require("express")
const app =express()
const path =require("path")
const cors=require("cors")
const corsOptions=require("./config/corsOption")
const {logger}=require("./middleware/logEvents")
const errorHandler=require('./middleware/errorHandler')
const mongoose=require("mongoose")
const connectDB=require("./config/dbConnect")
const PORT=process.env.PORT||3500
connectDB()
app.use(logger)
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/",express.static(path.join(__dirname,"/public")))
app .use("/",require("./routes/root"))
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use("/employees",require("./routes/api/employees"))
app.all("*",(req,res)=>{
    res.status(404)
    if(req.accepts("html")){
        res.sendFile(path.join(__dirname, 'views', '404.html'));  
    }else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
})
app.use(errorHandler)
mongoose.connection.once("open",()=>{
    console.log("connected to mogodb")
    app.listen(PORT,()=>console.log(`server running on port${PORT}`))
})
