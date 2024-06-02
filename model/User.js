const mongoose=require("mongoose")
const Schema=mongoose.Schema
const UserSchema=({
    username:{
        type:String,
        require:true
    },
    roles:{
        User:{
            type:Number,
            default:2001
        },
        Editor:Number,
        Admin:Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
})
module.exports=mongoose.model("user",UserSchema)