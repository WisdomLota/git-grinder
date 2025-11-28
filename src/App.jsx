import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CheckInbox from './pages/CheckInbox'
import MainDashboard from './pages/MainDashboard'
import SignUp from './pages/SignUp'
import Trash from './pages/Trash';
import OpenSourceGrinderProjects from './pages/OpenSourceGrinderProjects';
import './styles/App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/check-inbox' element={<CheckInbox />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/dashboard' element={<MainDashboard />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/open-source-grinder-projects" element={<OpenSourceGrinderProjects />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
