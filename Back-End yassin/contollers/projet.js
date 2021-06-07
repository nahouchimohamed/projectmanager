import  projet from "../modules/projet.js"

import user from "../modules/dbuser.js";
import admins from "../modules/admins.js"
import jwt from "jsonwebtoken"

const JWT_SECRET ="erl'kmwknlm;gdfhgfd41ghf54ghfgdhlkmfghbjifgbljnkfgljhbinfgjhibfg;joi"

export const createprojet = async (req,res)=>{
    console.log (req.body)

    const { titre,token,categorie,team,image,comentair,createdat,etat}  = req.body
    try {
      const user1 = jwt.verify(token,JWT_SECRET)
            console.log("JWT_decoded",user1 )
     
           

        const response = await projet.create({
          titre,
          categorie,
          team,
          image,
          comentair,
          createdat, 
          etat
          })
          console.log("post created ", response)
      }catch(error){
          console.log(error)
          return res.json({status:"error"}) 
      }

      res.json({status:"ok"})
    };
      export const getallprojet = async (req,res)=> {
         
          try {
           const projet1 = await projet.find()
              res.send (projet1)
          } catch (error) {
              console.log(error)
               res.status(404).json ({message:error.message })
          }
      }
      export const getprojetbyteam = async (req,res)=> {
        try {
          const projet1 = await projet.find({team:req.body.team})
             res.send (projet1)
         } catch (error) {
             console.log(error)
              res.status(404).json ({message:error.message })
         }
      }
      export const updateprojet = async (req,res)=> {
        const { titre,token,categorie,team,image,comentair}  = req.body

        try {
          const user1 = jwt.verify(token,JWT_SECRET)
          console.log("JWT_decoded",user1 )
   if (image==""){
    await projet.updateOne({_id:req.body._id},
      {$set:{titre,categorie,team,comentair}}
      )
      res.json({status:"ok"})
   }else{
          await projet.updateOne({_id:req.body._id},
            {$set:{titre,categorie,team,image,comentair}}
            )
            res.json({status:"ok"})}
          } catch (error) {
            console.log(error)
             res.status(404).json ({message:error.message })
        }
    }
  
  
     
       
    
        export const updateetat = async (req,res)=>{
          const {_id,etat} =req.body
          console.log(req.body)
          const post = await projet.findOne({_id:_id})

          try {
            await projet.updateOne({_id},
              {$set:{etat}}
              )
              
          res.json({status:" ok"})
    
          
          } catch (error) {
            console.log(error)
              res.json({status:" error", error:":))))"})
            
          }}
       
 
  
      export const deleteproject =async(req,res) =>{
        try {
          await projet.deleteOne({_id:req.body.id})   
          return  res.json("ok")


        } catch (error) {
          return  res.json(error)

        }
      }


