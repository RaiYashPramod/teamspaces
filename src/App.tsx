import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<LandingPage />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </>
  )
}

export default App
