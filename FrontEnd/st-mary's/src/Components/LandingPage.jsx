import { useState } from "react";

function LandingPage(){
    const [mode,setMode]=useState('register');
    const [showPassword,setShowPassword]=useState(false)

    return(
        <div className="container">
            <section className="image-section">
                
            </section>
            <section className="text-section">
                <div className="text-container">
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
                 
                    <form >
                        {mode === "register" &&(
                            <div className="form-group"> 
                            <label>FIRST NAME</label>
                            <input type="text" required placeholder="John"/>
                            <label>LAST NAME</label>
                            <input type="text" required placeholder="Doe" />
                            </div>
                        )}
                        {mode === "register" && (
                            <div className="form-group">
                                <label>EMPLOYEE / STAFF ID</label>
                                <input type="text" required placeholder="CIS-1-7132-3/2020"/>
                                <label >DEPARTMENT</label>
                                <select >
                                    <option value="" disabled selected>Select Department</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="surgery">Surgery</option>
                                    <option value="radiology">Radiology</option>
                                    <option value="orthopedics">Orthopedics</option>
                                    <option value="emergency">Emergency</option>
                                    <option value="general-medicine">General Medicine</option>
                                </select>
                            </div>
                        )}
                        <div className="form-group">
                             <label >Email</label>
                            <input type="email" required placeholder="johndoe@gmail.com" />
                        </div>
                        <div className="form-group password-section">
                                <label>Password</label>
                                <input type={showPassword ? "text":"password"} 
                                required
                                 minLength={6} 
                                placeholder="********" />
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