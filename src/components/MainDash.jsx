import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashHead from "../components/DashHead"
import Projects from '../pages/Projects'
import Overview from './Overview'
import Stats from './Stats'
import Calendar from './Calendar'
import Chat from './Chat'

const MainDash = () => {
  return (
    <div className="dashContainer min-h-screen w-full">
      <div className="head-wrapper p-10">
        <DashHead />
      </div>
      <div className="basic">
      <Overview />
        {/* <Router>
          <Routes>
            <Route path='/Overview' element={<Overview />} />
            <Route path='/Stats' element={<Stats />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Chat' element={<Chat />} />
            <Route path='/Calendar' element={<Calendar />} />
          </Routes>
        </Router> */}
      </div>
    </div>
  )
}

export default MainDash