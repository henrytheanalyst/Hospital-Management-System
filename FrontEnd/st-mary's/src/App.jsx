import { useState } from 'react';
/*import LandingPage from './Components/LandingPage'
import Header from './Components/Header'*/
import Sidebar from './Components/Sidebar';
import DashboardTemplate from './Components/Dashboard-template';

import './App.css'


function App() {
  const [activePage,setActivePage]=useState("dashboard")
  return (
  
    <main className='dashboard'>
      <Sidebar activePage={activePage} setActivePage={setActivePage}/>
      <section className="main-content">
        {activePage === "dashboard" && <DashboardTemplate/>}
        
      </section>
    </main>
  
    
  )
}

export default App
