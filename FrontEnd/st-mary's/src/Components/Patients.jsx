import { useState } from "react"

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
    /*const [patients,setPatients]=useState([])*/

    function handleSubmission(e){
        e.preventDefault();
        const newPatient={
            id:Date.now(),
            fullName,
            age,
            gender,
            phone,
            email,
            bloodType,
            ward,
            physician,
            condition
        }
        console.log(newPatient);
        /*setPatients((prev)=>[...prev,newPatient]);*/
        
         setFullName("");
        setAge("");
        setGender("");
        setPhone("");
        setEmail("");
        setBloodType("");
        setWard("");
        setPhysician("");
        setCondition("");

    setShowForm(false);
        
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
                            <tr>
                                <td>P-001</td>
                                <td>John Kamau</td>
                                <td>45</td>
                                <td>Cardiology</td>
                                <td>Dr. Mwangi</td>
                                <td>Heart Condition</td>
                                <td>2016-09-01</td>
                                <td>
                                    <span className="status admitted-status">
                                        Addmitted
                                    </span>
                                </td>
                            </tr>
                             <tr>
                                <td>P-002</td>
                                <td>Alex Mwikali</td>
                                <td>25</td>
                                <td>Surgery</td>
                                <td>Dr. Maina</td>
                                <td>Minor Surgery</td>
                                <td>2026-09-02</td>
                                <td>
                                    <span className="status observation-status">
                                        Observation
                                    </span>
                                </td>
                            </tr>
                             <tr>
                                <td>P-003</td>
                                <td>Jedidah Kwakana</td>
                                <td>34</td>
                                <td>Emergency</td>
                                <td>Dr. Onesmus</td>
                                <td>Labor pains</td>
                                <td>2026-09-03</td>
                                <td>
                                    <span className="status preop-status">
                                        Pre-op
                                    </span>
                                </td>
                            </tr>
                             <tr>
                                <td>P-004</td>
                                <td>Beth Wambui</td>
                                <td>33</td>
                                <td>Cardiology</td>
                                <td>Dr. Nakamura</td>
                                <td>Fracture</td>
                                <td>2026-09-03</td>
                                <td>
                                    <span className="status critical-status">
                                        Critical
                                    </span>
                                </td>
                            </tr>
                             <tr>
                                <td>P-005</td>
                                <td>John Kamau</td>
                                <td>45</td>
                                <td>Cardiology</td>
                                <td>Dr. Mwangi</td>
                                <td>Heart Condition</td>
                                <td>08:30 AM</td>
                                <td>
                                    <span className="status discharged-status">
                                        Discharged
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </section>
    )
}
export default Patients