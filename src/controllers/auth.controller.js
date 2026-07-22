const userModel=require("../models/user-model");

const jwt=require('jsonwebtoken')




async function registerUser(req,res){



    const {username,email,password}=req.body
    console.log(req.body)

    const isUserAlreadyExists=await userModel.findOne({
        email
    })

    if(isUserAlreadyExsists){
        return res.status(409).json({
            message:"User already exists"
        })
    }


    const user=await userModel.create({
        username,email,password

    })

    const token=jwt.sign({//This method is basically used to create an token
        id:user._id
        
    },process.env.JWT_SECRET)



    res.cookie("mama",token)//first parameter means the name of an cookie
    res.status(201).json({
        message:"User registered successfully",
        user,
        token
    })

}



module.exports={registerUser}