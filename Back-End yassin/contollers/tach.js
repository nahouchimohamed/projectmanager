import  tache from "../modules/tache.js"

import user from "../modules/dbuser.js";
import admins from "../modules/admins.js"
import jwt from "jsonwebtoken"

const JWT_SECRET ="erl'kmwknlm;gdfhgfd41ghf54ghfgdhlkmfghbjifgbljnkfgljhbinfgjhibfg;joi"

export const createtache = async (req,res)=>{
    console.log (req.body)

    const { projetid,token,email,date,date2,description,comentair,etat,mat,matstat}  = req.body
    try {
      const user1 = jwt.verify(token,JWT_SECRET)
            console.log("JWT_decoded",user1 )
     
           

        const response = await tache.create({
          projetid,
          description, 
          email,
          date,
          date2,
          comentair,
          etat,
          mat,
          matstat
          })
          console.log("tache created ", response)
      }catch(error){
          console.log(error)
          return res.json({status:"error"}) 
      }

      res.json({status:"ok"})
    };
    
    export const updateetattache = async (req,res)=>{
      const {_id,etat} =req.body
      console.log(req.body)

      try {
        await tache.updateOne({_id},
          {$set:{etat}}
          )
          
      res.json({status:" ok"})

      
      } catch (error) {
        console.log(error)
          res.json({status:" error", error:":))))"})
        
      }}
      export const getbyprojet = async (req,res)=> {
         
          try {
           const tache1 = await tache.find({projetid:req.body.id})
              res.send (tache1)
          } catch (error) {
              console.log(error)
               res.status(404).json ({message:error.message })
          }
      }
      
      export const getbyemail = async (req,res)=> {
        try {
          console.log(req.body)
          const tache1 = await tache.find({projetid:req.body.id,email:req.body.email})
             res.send (tache1)
         } catch (error) {
             console.log(error)
              res.status(404).json ({message:error.message })
         }
      }
      export const deletetache = async (req,res)=> {
        try {
          console.log(req.body)
          const tache1 = await tache.deleteOne({_id:req.body.id})
             res.send (tache1)
         } catch (error) {
             console.log(error)
              res.status(404).json ({message:error.message })
         }
      }
      export const updatetache = async (req,res)=> {
        const { id,token,email,date,date2,description,mat,matstat}  = req.body
console.log(req.body)
        try {
          const user1 = jwt.verify(token,JWT_SECRET)
          console.log("JWT_decoded",user1 )
  
    await tache.updateOne({_id:req.body.id},
      {$set:{email,date,date2,description,mat,matstat}}
      )
      res.json({status:"ok"})
   
          } catch (error) {
            console.log(error)
             res.status(404).json ({message:error.message })
        }
    }
  
    
     
    export const sendingcomentair = async (req,res)=>{
      const {id,comentair} =req.body
      console.log(req.body)

      try {
        await tache.updateOne({_id:req.body.id},
          {$set:{comentair}}
          )
          
      res.json({status:" ok"})

      
      } catch (error) {
        console.log(error)
          res.json({status:" error", error:":))))"})
        
      }}
   
    
        export const updateetat = async (req,res)=>{
          const {_id,etat} =req.body
          console.log(req.body)
          const post = await tache.findOne({_id:_id})

          try {
            await tache.updateOne({_id},
              {$set:{etat}}
              )
              
          res.json({status:" ok"})
    
          
          } catch (error) {
            console.log(error)
              res.json({status:" error", error:":))))"})
            
          }}
       
 
  
    

