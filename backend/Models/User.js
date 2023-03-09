const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    marks:{
        type:Number,
        required:true,
        trim:true,
    }
})

const UserModel = mongoose.model("User",userSchema)

module.exports = UserModel