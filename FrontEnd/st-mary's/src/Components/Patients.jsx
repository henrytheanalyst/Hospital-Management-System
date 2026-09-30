import { useState,useEffect } from "react"
import axios from 'axios';

function Patients(){
    const [showForm,setShowForm]=useState(false);
    const [fullName,setFullName]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [bloodType,setBloodType]=useState("");
    const [ward,setWard]=useState("")
    const[physician,setPhysician]=useState("");
    const [condition,setCondition]=useState("");
    const [status,setStatus]=useState("");
    const [patients,setPatients]=useState([]);

    useEffect(()=>{
        async function fetchPatients() {
            try {
                const token=localStorage.getItem('token');
                const response=await axios.get(
                      "http://localhost:3000/api/hospital/patients",
                      {
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                      }

                );
                console.log(response.data);
                setPatients(response.data.data)
                
            } catch (error) {
                console.error(error);
                console.log(error.response?.data);
                
                
            }
        }
        fetchPatients();
    },[])
    

    async function handleSubmission(e){
        e.preventDefault();
        const token=localStorage.getItem('token');
        try {
            const response=await axios.post(
                "http://localhost:3000/api/hospital/createpatients",
                {
                    fullname:fullName,
                    age:age,
                    gender:gender,
                    phone:phone,
                    email:email,
                    blood_type:bloodType,
                    ward:ward,
                    physician:physician,
                    medical_condition:condition,
                    status:status
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            )
            console.log(response.data);
            const updatedPatients=await axios.get(
                  "http://localhost:3000/api/hospital/patients",
                  {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                  }
            );
            setPatients(updatedPatients.data.data);

            setAge("");
            setBloodType("");
            setCondition("");
            setEmail("");
            setFullName("")
            setGender("");
            setPhone("");
            setPhysician("");
            setStatus("");
            setWard("");

            setShowForm(false)
            
        } catch (error) {
            console.error(error);
            console.log(error.response?.data);
            
            
        }

        
        
    }
    return(
        <section className="patients-page">
            <div className="patients-header">
                <div>
                    <h1>Patient Records</h1>
                    <p>Manage and view hospital patient records</p>
                </div>
                <button className="add-patient" onClick={()=>setShowForm(true)}>
                    ➕ Add Patient
                </button>
            </div>
            {showForm && (
                <form className="add-patient-form" onSubmit={handleSubmission}>
                    <h2>Add New Patient</h2>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter full name" value={fullName} onChange={(e)=>setFullName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" placeholder="Enter Age" value={age} required onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter phone number" value={phone} required onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter email address" value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Blood Type</label>
                        <select value={bloodType} onChange={(e)=>setBloodType(e.target.value)}>
                            <option value="" disabled>Select Blood Type</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ward</label>
                       <select value={ward} onChange={(e)=>setWard(e.target.value)}>
                                    <option value="" disabled>Select Department</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Surgery">Surgery</option>
                                    <option value="Radiology">Radiology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Emergency">Emergency</option>
                                    <option value="General Medicine">General Medicine</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Physician</label>
                        <input type="text" placeholder="Enter physician name" value={physician} onChange={(e)=>setPhysician(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Condition</label>
                        <input type="text" placeholder="Enter patient's condition" value={condition} required onChange={(e)=>setCondition(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Patient Status</option>
                            <option value="Admitted">Admitted</option>
                            <option value="Observation">Observation</option>
                            <option value="Pre-op">Pre-op</option>
                            <option value="Critical">Critical</option>
                            <option value="Discharged">Discharged</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="save-patient">
                            Save Patient</button>
                        <button type="button" className="cancel-patient" onClick={()=>setShowForm(false)}>
                            Cancel</button>
                    </div>
                </form>
            )}
            <div className="patients-table-container">
               <table>
                        <thead>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Ward</th>
                            <th>Physician</th>
                            <th>Condition</th>
                            <th>Admitted</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            {patients.map((patient)=>(
                                <tr key={patient.id}>
                                    <td>P-{String(patient.id).padStart(3,"0")}</td>
                                    <td>{patient.fullname}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.ward}</td>
                                    <td>{patient.physician}</td>
                                    <td>{patient.medical_condition}</td>
                                    <td>
                                        {new Date(patient.admitted_at).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <span className="status">
                                            {patient.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </section>
    )
}
export default Patients