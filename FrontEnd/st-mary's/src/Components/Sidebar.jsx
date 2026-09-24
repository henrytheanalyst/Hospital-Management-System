function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="logo-info">
                <div className="logo">✚</div>
                <div className="name-info">
                    <h2>St.Mary's</h2>
                    <p>Hospital System</p>
                </div>
            </div>
             <div className="cards">
                    <div className="card">
                        <span className="icon">田</span>
                        <span className="name">Dashboard</span>
                    </div>
                     <div className="card">
                        <span className="icon">👤</span>
                        <span className="name">Patient</span>
                    </div>
                     <div className="card">
                        <span className="icon">🗓️</span>
                        <span className="name">Appointments</span>
                    </div>
                     <div className="card">
                        <span className="icon">◎</span>
                        <span className="name">Staff</span>
                    </div>
                     <div className="card">
                        <span className="icon">⧈</span>
                        <span className="name">Ward</span>
                    </div>
                     <div className="card">
                        <span className="icon">田</span>
                        <span className="name">Dashboard</span>
                    </div>
                     <div className="card">
                        <span className="icon">田</span>
                        <span className="name">Dashboard</span>
                    </div>
                    
            </div>
            <button>
                    Logout
            </button>
        </aside>
    );
}
export default Sidebar;