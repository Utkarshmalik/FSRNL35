const mongoose= require("mongoose");
const { userTypes, userStatus } = require("../utils/constants");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        minLength:4,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:10
    },
    userType:{
        type:String,
        required:true,
        default:userTypes.customer,
        enum:Object.values(userTypes)
    },
    userStatus:{
        type:String,
        required:true,
        default:userStatus.pending,
        enum:Object.values(userStatus)
    }

})

const User = mongoose.model("user_gfg",userSchema);


module.exports=User;