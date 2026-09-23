import { useState } from "react";
import axios from 'axios';

function LandingPage(){
    const [mode,setMode]=useState('register');
    const [showPassword,setShowPassword]=useState(false);
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [id,setId]=useState("");
    const [department,setDepartment]=useState("");
    const [msg,setMsg]=useState("");
    const [msgtype,setMsgType]=useState("")

    async function handleSubmit(e){
        e.preventDefault();
        setMsg("")
        if(mode === "register"){
            try {
                 const response=await axios.post(
                "http://localhost:3000/api/auth/register",
                {
                    fname:fname,
                    lname:lname,
                    staff_id:id,
                    email:email,
                    password: password,
                    department_id:department
                }
            );
            setMsg(response.data.message);
            setMsgType("success");
            setFname("")
            setLname("");
            setEmail("");
            setId("");
            setPassword("");
            setMode("signin");  
            } catch (error) {
                console.log(error.response.data.message);
                setMsg(error.response.data.message)
                setMsgType("error")
               
                
            }
                
    }else{
        try {
            const response=await axios.post(
                "http://localhost:3000/api/auth/login",
                {
                    email:email,
                    password:password
                }
            );
            setMsg(response.data.message);
            setMsgType("success")
        } catch (error) {
            setMsg(error.response.data.message);
            setMsgType("error")
            console.log(error);
            
            
        }
        
        
    }
}
   

    return(
        <div className="container">
           
            <section className="image-section">
                
            </section>
            <section className="text-section">
                <div className="text-container">
                            {msg && (
                                <div className={`msgs ${msgtype}`}>
                                    {msg}
                                </div>
                            )}
                    <div className="social-btn">
                        <button onClick={()=>setMode('signin')} className={mode === 'signin'?"active":""}>SignIn</button>
                        <button onClick={()=>setMode('register')} className={mode === 'register'?"active":""}>Register</button>
                    </div>
                    <h1 className="title">
                        {mode === 'register'? "Staff Registration":"Welcome Back"}
                    </h1>
                    <p className="subtitle">
                        {mode === 'register'? "Create your account - pending HR verfication":"Sign in with your credentials to access the system"}
                    </p>
                 
                    <form onSubmit={handleSubmit} >
                        {mode === "register" &&(
                            <div className="form-group"> 
                            <label>FIRST NAME</label>
                            <input type="text" required placeholder="John" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                            <label>LAST NAME</label>
                            <input type="text" required placeholder="Doe" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                            </div>
                        )}
                        {mode === "register" && (
                            <div className="form-group">
                                <label>EMPLOYEE / STAFF ID</label>
                                <input type="text" required placeholder="CIS-1-7132-3/2020" value={id} onChange={(e)=>setId(e.target.value)}/>
                                <label >DEPARTMENT</label>
                                <select value={department} onChange={(e)=>setDepartment(e.target.value)} >
                                    <option value="" disabled selected>Select Department</option>
                                    <option value="1">Cardiology</option>
                                    <option value="2">Neurology</option>
                                    <option value="3">Surgery</option>
                                    <option value="4">Radiology</option>
                                    <option value="5">Orthopedics</option>
                                    <option value="6">Emergency</option>
                                    <option value="7">General Medicine</option>
                                </select>
                            </div>
                        )}
                        <div className="form-group">
                             <label >Email</label>
                            <input type="email" required placeholder="johndoe@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group password-section">
                                <label>Password</label>
                                <input type={showPassword ? "text":"password"} 
                                required
                                 minLength={6} 
                                placeholder="********"
                                value={password} onChange={(e)=>setPassword(e.target.value)} />
                                  <button className="show" type="button" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "Hide Password":"Show Password"}</button>                     
                            
                           
                        </div>
                        <div className="forgot-section">
                            <div className="gray-area">
                             <input type="checkbox"/>
                                <label>Remember me</label>
                            </div>
                            <a href="#">Forgot Password?</a>
                           
                        </div>
                        <button type="submit">
                            {mode === 'register'? "Register":"Sign In"}
                        </button>
                       
                    </form>
                </div>
            </section>
        </div>
    );
}
export default LandingPage;