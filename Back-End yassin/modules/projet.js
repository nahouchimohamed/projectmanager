import mongoose from "mongoose"


//Create schema
const projetpostschema =  mongoose.Schema({
    titre: {
        type: String,
        required:true

        
        
    },
    team:{
        type:String,
        required:true

    },


    categorie: {
        type: String,
        required:true


    },
   
    
    image : {
        type: String,
       


    },
  
    comentair: {
        type: String,

    },
      
    etat: {
        type: Boolean,
        default: false


    },
    createdat: {
        type: Date,
        default: Date.now


    },
  
},
);

 const projet = mongoose.model("projet", projetpostschema);
 export default projet