import mongoose from "mongoose"


//Create schema
const tachepostschema =  mongoose.Schema({
    email: {
        type: String,
        required:true

        
        
    },
    projetid: {
        type: String,
        required:true

        
        
    },
  
  
    
    description : {
        type: String,
       


    },
  
    comentair: {
        type: String,
        default:""

    },
      
    etat: {
        type: Boolean,
        default: false


    },
    date: {
        type: String,


    },
    date2: {
        type: String,


    },
     mat: {
        type: String,


    },
    matstat: {
        type: Boolean,
        default: false


    }
  
},
);

 const tache = mongoose.model("tache", tachepostschema);
 export default tache