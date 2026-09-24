function Header(){
    return(
        <header className="navbar">
            <h1>St.Mary's Hospital/Dashboard</h1>
            <div className="right-side">
                <div className="system-activity">
                    <div className="on-off"></div>
                    <h3 className="subtitle">Online</h3>
                </div>
                <div className="bell">
                    🔔
                </div>
            </div>
        </header>
    );
}
export default Header;