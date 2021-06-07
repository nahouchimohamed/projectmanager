import bcrypt from "bcryptjs";
import user from "../modules/dbuser.js";
import admins from "../modules/admins.js"
import mongoose from "mongoose";
import {veriy2} from "../validation/register.js"

import {verify1} from "../validation/login.js"
import jwt from "jsonwebtoken"
 const JWT_SECRET ="erl'kmwknlm;gdfhgfd41ghf54ghfgdhlkmfghbjifgbljnkfgljhbinfgjhibfg;joi"

  


export function verifyToken (req,res,next) {
    const bearerHeader = req.header ["Authorization"]
    if (typeof bearerHeader !=="undefined"){
        const bearerHeader = bearerHeader.split (" ")[1]
        req.token = bearerHeader
        next()

    }else{
        res.sendStatus(403)
    } 

}

export const userpost = async (req,res)=>{
    console.log (req.body)
  

  
 
    
    const {Cin,Firstname,Lastname,phone,team ,email,password:plainTextPassword ,password2,date,admin}  = req.body
    const password = await bcrypt.hash(plainTextPassword,10)
    const existUemail =  await user.findOne({ email: req.body.email})

    
    const {error1,isValid1} = veriy2(existUemail)

    if (!isValid1) {
        return res.status(400).json(error1);
    }
    
  
    try {
     
     const response = await user.create({
        Cin,
         Firstname ,
           Lastname,
            phone,
            email,
            password,
            team,
            date,
            admin
        })
        console.log("user created ", response)
        res.status(201).json(response)
    }catch(error){
        
        console.log(error)
        res.status(404).json ({message:error.message })
    }}
    export const deleteuser = async (req,res) => {
        const {email}= req.body.email
try {
    await user.deleteOne({ email: req.body.email})
   return res.json({status:" ok"})

} catch (error) {
    return  res.json({status:" error"})

}
    }
    export const Updateuser = async (req,res) => {
        const {token,Admin, Cin,team,Firstname, Lastname, phone,email,password:plainTextPassword} =req.body
        const password = await bcrypt.hash(plainTextPassword,10)
        const existUemail =  await user.findOne({ email: req.body.email})

   

        
       
      console.log(req.body)
      console.log(existUemail)

      
        try {

            const user1 = jwt.verify(token,JWT_SECRET)
            console.log("JWT_decoded",user1 )
            if (existUemail){
if (plainTextPassword==""){
    console.log({email: req.body.email})

            await user.updateOne({email:req.body.email},
                {$set:{Admin,Cin,team,Firstname,Lastname, phone,email}}
                )
            res.json({status:" ok"})
        }
           
            
          
           
             else { 
                await user.updateOne({email:req.body.email},
                    {$set:{Admin,Cin,team,Firstname,Lastname,phone,email,password}}
                    )
                res.json({status:" ok1"})}}
            
            

        } catch (error) {
            console.log(error)
            res.json({status:" error", error:":))))"})

            
        }

    }
    export const getusers = async (req,res) => {
        const existUemail =  await user.find({ admin:req.body.email})
        return res.status(200).json(existUemail);

    }

    export const usersignin = async (req,res) => {
       

        const {email, password }  = req.body // email-password

        const existUemail =  await user.findOne({ email: req.body.email}).lean()
       
      

       
        const { error1,isValid1 } =await  verify1(existUemail,password)
        if (!isValid1) {
            return res.status(400).json(error1);
        } 
       
 if (existUemail){
    
    
        const token = jwt.sign({
            id : existUemail._id,
            Cin:existUemail.Cin,
            Firstname: existUemail.Firstname,
            Lastname: existUemail.Lastname,
            team: existUemail.team,
            admin: existUemail.admin,

            Phone: existUemail.phone,
            email :existUemail.email
            
        },
        JWT_SECRET   ,{ expiresIn: '7d' });
        return  res.status(200).json ({ token})
     }
  

    


     
    }
    
    
  
     