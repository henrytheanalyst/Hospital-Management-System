import express from "express";

import { protect } from "../Middleware/badge.js";
import addPatients from "../Controllers/patients.js";

const router=express.Router();

router.post('/createpatients',protect,addPatients);



export default router;