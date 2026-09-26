import Header from "./Header";
function DashboardTemplate(){
    return(
        <section className="dashboard-area">
            <Header/>
            <div className="dashboard-content">
                <h2>Overview</h2>
                <h3>{new Date().toDateString()}-Morning Report</h3>

            
            <div className="view-dashboard">
                <div className="view">
                    <h3>Total PAtients</h3>
                    <h2>312</h2>
                    <h4>+14 since yesterday</h4>
                </div>
                <div className="view">
                    <h3>ADMISSIONS TODAY</h3>
                    <h2>27</h2>
                    <h4>8 pending triage</h4>
                </div>
                <div className="view">
                    <h3>CRITICAL CASES</h3>
                    <h2>25</h2>
                    <h4>ICU:8 .Emergency:5</h4>
                </div>
                <div className="view">
                    <h3>BED OCCUPANCY</h3>
                    <h2>84%</h2>
                    <h4>119/142 beds occupied</h4>
                </div>
            </div>
            <div className="today-activity">
                <div className="act">
                    <h2>6</h2>
                    <h3>Surgeries</h3>
                </div>
                 <div className="act">
                    <h2>11</h2>
                    <h3>Discharges</h3>
                </div>
                 <div className="act">
                    <h2>4</h2>
                    <h3>Transfers</h3>
                </div>
                 <div className="act">
                    <h2>47</h2>
                    <h3>Outpatient</h3>
                </div>
                 <div className="act">
                    <h2>138</h2>
                    <h3>Lab Tets</h3>
                </div>
                 <div className="act">
                    <h2>92</h2>
                    <h3>Prescriptions</h3>
                </div>
            </div>
            <div className="admissions-area">
                <div className="admissions-header">
                    <h2>Recent Admissions</h2>
                    <p>Patients recently admitted to the hospital</p>
                </div>
                <div className="table-container">
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
                                    <span className="status addmitted-status">
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
                                    <span className="status stable-status">
                                        Stable
                                    </span>
                                </td>
                            </tr>
                             <tr>
                                <td>P-001</td>
                                <td>John Kamau</td>
                                <td>45</td>
                                <td>Cardiology</td>
                                <td>Dr. Mwangi</td>
                                <td>Heart Condition</td>
                                <td>08:30 AM</td>
                                <td>
                                    <span className="status admitted-status">
                                        Stable
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                   
                </div>
            </div>
        </section>
    );
}
export default DashboardTemplate;