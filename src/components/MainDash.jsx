import React from 'react'
import DashHead from "../components/DashHead"
import Projects from '../pages/Projects'

const MainDash = () => {
  return (
    <div className="dashContainer min-h-screen w-full">
      <div className="head-wrapper p-10">
        <DashHead />
      </div>
      <div className="basic">
        <Projects />
      </div>
    </div>
  )
}

export default MainDash