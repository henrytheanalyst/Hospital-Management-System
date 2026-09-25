function DashboardTemplate(){
    return(
        <section className="dashboard-area">
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
                    {/* now here i dont  know if its a table or a form that has the following column
                        patient_id
                        name
                        age
                        ward
                        physician
                        condition
                        admitted
                        status
                    
                    */}
                </div>
        </section>
    );
}
export default DashboardTemplate;