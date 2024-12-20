const mongoose=require("mongoose")

const connectDB=async()=>{
    try {
        mongoose.connect(process.env.DATABASE_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    } catch (error) {
        console.log(error)
    }

}
module.exports = connectDB