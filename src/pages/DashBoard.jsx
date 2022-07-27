import React from 'react'
import MainDash from '../components/MainDash'
import SideMenuBar from '../components/SideMenuBar'

const DashBoard = () => {
  return (
    <div className="dash-conatiner min-h-screen flex">
      <SideMenuBar />
      <MainDash />
    </div>
  )
}

export default DashBoard