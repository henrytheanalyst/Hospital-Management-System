import express from "express";

import { protect } from "../Middleware/badge.js";
import { addPatients,getPatients,deletePatient} from "../Controllers/patients.js";

const router=express.Router();

router.post('/createpatients',addPatients);
router.get('/patients',getPatients);
router.delete('/patients/:id',deletePatient)



export default router;