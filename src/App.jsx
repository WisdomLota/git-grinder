import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CheckInbox from './pages/CheckInbox'
import './styles/App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/check-inbox' element={<CheckInbox />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
