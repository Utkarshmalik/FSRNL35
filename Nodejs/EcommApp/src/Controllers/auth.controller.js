const { SECRET } = require("../../configs/auth.config");
const User = require("../Models/user.model");
const { userTypes,  userStatus} = require("../utils/constants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp=async (req,res)=>{

    const {name,email,userId,password,userType} = req.body;

    const status = (userType===userTypes.admin)? (userStatus.pending) : userStatus.approved;
    const hashedPassword = bcrypt.hashSync(password,10);

    const newUser = new User({
        name, 
        email,
        userId,
        password:hashedPassword,
        userType,
        userStatus:status
    });

    try{
        const user = await newUser.save();
        res.status(201).send(user);
    }
    catch(err){
        res.status(500).send({message:"Something went wrong"});
    }
}

exports.signIn = async (req,res)=>{

    const {userId, password} = req.body;

    const user = await User.findOne({userId:userId});

    if(!user){
        return res.status(400).send({message:"Userid passed is invalid"});
    }

    const isValidPassword = bcrypt.compareSync(password,user.password);

    if(!isValidPassword){
        return res.status(400).send({message:"Password passed is invalid"});
    }

    var token = jwt.sign({userId:user.userId}, SECRET, { expiresIn: '1h' });


    return res.send({
        name:user.name,
        userId:user.userId,
        email:user.email,
        userType:user.userType,
        accessToken:token
    });
}