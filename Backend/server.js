import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import AuthRoutes from './Routes/authRoutes.js'

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(cors());

//auth-routes

app.use('/api/auth',AuthRoutes)

const port=Number(process.env.PORT || 3000);

app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
    
});
