import Validator from "validator";
import isEmpty from "is-empty";
import user from "../modules/dbuser.js";

export function veriy2 (data1){
    const error1 = {};
     
   
     if (data1){
        error1.email = "L'adresse e-mail existe déjà";
    }
    
     
    
       return {
           error1,

       isValid1: isEmpty(error1)};
    }
  
 
    
