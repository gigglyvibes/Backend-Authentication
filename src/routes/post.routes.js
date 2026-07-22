const express=require("express");

const jwt=require("jsonwebtoken")
const router=express.Router();



router.post("/create",async(req,res)=>{

    const token=req.cookies.token;//once the user is registerd the token is created by  an server that token is stored in an cookie that is accessed here when the user of an same token came here to perfrom something

    if(!token){//if thokn is not present then it is going to throw an error
        return res.status(401).json({
            message:"Unauthorizeed"
        })
    }

    try{

       const decoded=  jwt.verify(token,process.env.JWT_SECRET)//it consist of id of that user od that cookie which has been created by an srver

       const user=await userModel.findOne({
        _id:decode.id

       })
       console.log(user)

    }
    catch(err){//if that token is invalid then it is going to throw an error
        return res.status(401).json({

            message:"Token is invalid"
        })
    }

   

    res.send("Post created successfullly")
})

module.exports=router;