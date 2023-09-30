
const jwt = require("jsonwebtoken");
const { SECRET } = require("../../configs/auth.config");
const User = require("../Models/user.model");
const { userTypes } = require("../utils/constants");

const verifyToken = async (req,res,next)=>{

    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({message:"No Token Provided"});
    }

    console.log(SECRET);

    jwt.verify(token,SECRET, async (err,payload)=>{

        if(err){
            return res.status(401).send({message:"User is not authenticated!"});
        }

        const userId = payload.userId;
        const user = await User.findOne({userId:userId});
        req.user=user;
        next();
    });
}

const verifyAdmin= async (req,res,next)=>{

    try{
  
        if(req.user.userType !== userTypes.admin){
            return res.status(403).send({message:"Requires Admin Role!"});
        }

        next();


    }catch(err){

       res.status(500).send({message:"Something went wrong"+err});
    }
}



module.exports={
    verifyToken,
    verifyAdmin
}