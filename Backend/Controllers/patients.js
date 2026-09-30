import pool from "../db.js";

export const addPatients=async (req,res) => {
    try {
        const {fullname,age,gender,phone,email,blood_type,ward,physician,medical_condition,status}=req.body;
        if(!fullname || !age || !gender || !phone || !email || !blood_type || !ward || !physician || !medical_condition ||!status){
            return res.status(400).json({
                message:"Kindly fill all the required fields"
            })
        }
        const result=await pool.query(`INSERT INTO patients(fullname,age,gender,phone,email,blood_type,ward,physician,medical_condition,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,[fullname,age,gender,phone,email,blood_type,ward,physician,medical_condition,status]);
        res.status(201).json({
            message:`Patient ${fullname} added successfully`,
            data:result.rows[0]
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Problem encountered in adding patient"
        })
        
    }
}

export const getPatients=async (req,res) => {
    try {
        const result=await pool.query(`SELECT * FROM patients ORDER BY id DESC`);
        res.status(200).json({
            data:result.rows
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Problem encountered while fetching patients"
        })
        
    }
}