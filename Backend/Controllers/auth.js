import pool from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register=async (req,res) => {
    try {
        const {fname,lname,staff_id,email,password,department_id}=req.body;
        if(!fname || !lname || !staff_id|| !email ||!password || !department_id){
            return res.status(400).json({
                message:"All fields are required for registration"
            })
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const result=await pool.query(`INSERT INTO users(fname,lname,staff_id,email,password,department_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING fname,lname,staff_id,email,department_id`,[fname,lname,staff_id,email,hashedPassword,department_id]);
        res.status(201).json({
            message:`User ${email} registered successfully`
        })
    } catch (error) {
        console.error(error);
        if(error.code === "23505"){
            return res.status(409).json({
                message:`Account exists`
            })
        }
        res.status(500).json({
            message:"Error encountered in registration",
        })
        
    }
};


export const login=async (req,res) => {
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"All fields are required for sign in"
            })
        }
        const result=await pool.query(`SELECT * FROM users WHERE email=$1`,[email]);
        if(result.rows.length === 0){
            return res.status(400).json({
                message:"User with this email doesn't exist"
            })
        }
        const user=result.rows[0];
        const passMatch=await bcrypt.compare(password,user.password);
        if(!passMatch){
            return res.status(401).json({
                message:'Incorrect Password'
            })
        }
        const token=jwt.sign(
            {
                id:user.id,
                email:user.email,
                staff_id:user.staff_id,
            },
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.status(200).json({
            message:"Login successfull",
            token:token
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Error encountered in login"
        })
        
    }
    
}