import mongoose from "mongoose"


//Create schema
const userschema = new mongoose.Schema({
    Cin: {
        type: Number,
        required: true,
       
 
        
        
    },
    team: {
        type: String,
        required: true,
       
 
        
        
    },
 Firstname: {
        type: String,
        required: true,
       
 
        
        
    },
     Lastname: {
        type: String,
        required: true,
       
 
        
        
    },
    

    email: {
        type: String,
        required: true,
       

        

    },
    phone:{
        type:Number
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now


    },
    admin: {
        type: Boolean,
        default: false


    },
  
    
},{ collection: 'users' }

);

 const user= mongoose.model("user", userschema);
 export default user