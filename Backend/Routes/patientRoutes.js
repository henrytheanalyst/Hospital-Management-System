import express from "express";
import { protect } from "../Middleware/badge";
import addPatients from "../Controllers/patients";

const router=express.Router();

router.post('/createpatients',addPatients)