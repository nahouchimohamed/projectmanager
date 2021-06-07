import Validator from "validator";
import isEmpty from "is-empty";
import bcrypt from "bcryptjs";
import user from "../modules/dbuser.js";



export function validateLoginInput(data) {
    const errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Ce champ est obligatoire";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "E-mail est invalide";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.email = "Ce champ est obligatoire";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
export  async function verify1 (data1,data2){
    const error1 = {};
    

    if (!data1 ){

        error1.email= "E-mail  est incorrecte "
    } 
    else  if (data1 ){
       
        const confirme = await bcrypt.compare(data2, data1.password)
    if (!confirme)  {

        error1.password ="Mot de passe est incorrecte "
    }

    }

  

return    {
    error1,
    isValid1: isEmpty(error1)
};

}