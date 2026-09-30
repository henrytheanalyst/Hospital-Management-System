import express from "express";

import { protect } from "../Middleware/badge.js";
import { addPatients,getPatients } from "../Controllers/patients.js";

const router=express.Router();

router.post('/createpatients',addPatients);
router.get('/patients',getPatients);



export default router;