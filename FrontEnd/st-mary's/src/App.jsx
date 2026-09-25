/*import LandingPage from './Components/LandingPage'
import Header from './Components/Header'*/
import Sidebar from './Components/Sidebar';
import DashboardTemplate from './Components/Dashboard-template';

import './App.css'

function App() {
  return (
    <>
    <main className='dashboard'>
    <Sidebar/>
    <section className="main-content">
      <DashboardTemplate/>
    </section>
    </main>
  
    </>
  )
}

export default App
