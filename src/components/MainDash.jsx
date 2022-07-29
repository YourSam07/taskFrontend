import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashHead from "../components/DashHead"
import Projects from '../pages/Projects'
import Overview from './Overview'
import Stats from './Stats'
import Calendar from './Calendar'
import Chat from './Chat'
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

const MainDash = () => {
  const [{renderOption}] =useContext(UserContext)
  const renderthis = () =>{
    if (renderOption === "Overview"){
      return <Overview />
    }if (renderOption === "Stats"){
      return <Stats />
    }if (renderOption === "Projects"){
      return <Projects />
    }if (renderOption === "Chat"){
      return <Chat />
    }if (renderOption === "Calendar"){
      return <Calendar />
    }
  }
  return (
    <div className="dashContainer min-h-screen w-full">
      <div className="head-wrapper p-10">
        <DashHead />
      </div>
      <div className="basic">
        {renderthis()}
      </div>
    </div>
  )
}

export default MainDash