import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CheckInbox from './pages/CheckInbox'
import MainDashboard from './pages/MainDashboard'
import SignUp from './pages/SignUp'
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
        </Routes>
      </Router>
    </>
  )
}

export default App
