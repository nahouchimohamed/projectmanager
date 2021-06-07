import mongoose from "mongoose"


//Create schema
const adminsschema = new mongoose.Schema({
    Cin: {
        type: Number,
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
  
    
    
},{ collection: 'admins' }

);

 const admins= mongoose.model("admins", adminsschema);
 export default admins