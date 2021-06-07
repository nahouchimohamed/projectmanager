
import express from 'express';

import {userpost,getusers,usersignin,Updateuser ,deleteuser} from "../../contollers/Register.js"
import {getallprojet,updateetat,updateprojet,getprojetbyteam,deleteproject,createprojet} from "../../contollers/projet.js"
import {createtache,getbyprojet,sendingcomentair,updateetattache,updatetache,getbyemail,deletetache} from "../../contollers/tach.js"

const router = express.Router();

router.post ("/api/register",userpost )


router.post ("/api/signin",usersignin )

router.post ("/api/getusers" , getusers)
router.post("/api/Updateuser",Updateuser)
router.post("/api/deleteuser",deleteuser)
router.post("/api/updateetat",updateetat)
router.post('/api/updateprojet',updateprojet)
router.post('/api/getprojetbyteam',getprojetbyteam)
router.post('/api/createprojet',createprojet)
router.post('/api/createtache',createtache)


router.post('/api/deleteproject',deleteproject)
router.post('/api/updatetache',updatetache)

router.post('/api/getbyprojet',getbyprojet)
router.post('/api/updateetattache',updateetattache)

router.post('/api/sendingcomentair',sendingcomentair)

router.post("/api/getbyemail",getbyemail)

router.post("/api/getallprojet",getallprojet)
router.post("/api/deletetache",deletetache)

export default router;