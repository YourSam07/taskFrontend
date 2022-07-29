import React, { useState } from 'react'
import { MdHomeFilled, MdSettings } from "react-icons/md"
import { ImStatsBars } from "react-icons/im"
import { FaRegFolderOpen } from "react-icons/fa"
import { BsCalendarDate, BsChatSquareFill } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"

const SideMenuBar = () => {
  const data = [{
    active: false,
    icon: <MdHomeFilled fill='#9A9A9A' size='30px' />,
    fname: 'Overview',
   }, {
    icon: <ImStatsBars fill='#9A9A9A' size='30px' />,
    fname: 'Stats',
    active: false,
  }, {
    icon: <FaRegFolderOpen fill='#9A9A9A' size='30px' />,
    fname: 'Projects',
    active: true,
  }, {
    icon: <BsChatSquareFill fill='#9A9A9A' size='30px' />,
    fname: 'Chat',
    active: false,
  }, {
    icon: <BsCalendarDate fill='#9A9A9A' size='30px' />,
    fname: 'Calendar',
    active: false,
  },]
  const [options, setOptions] = useState(data)
  const makeActive = (opt) => {  
    const newState = options.map(item => {
      if (item.fname === opt){
        return {...item, active: true}
      } else {
        return {...item, active: false}
      }
    })
    setOptions(newState)
    console.log(options)
  }

  return (
    <div className="container min-h-screen w-1/4 border border-r-1 border-border flex flex-col ">
      <div className="logo text-2xl font-bold p-10 ">.taskez</div>
      <div className="options py-10 pl-10 flex-1">
        <ul>
          {options.map((item) => {
            return (
              <li className='my-4 w-full'>
                <div className={item.active ? "option-wrapper flex items-center gap-6 cursor-pointer border-r-4 border-r-green w-full" :"option-wrapper flex items-center gap-6 cursor-pointer hover:border-r-4 hover:border-r-green w-full"} onClick={() => makeActive(item.fname)}>
                  <div className="logo">{item.icon}</div>
                  <div className={item.active ? 'text-xl font-bold text-text' : 'text-xl text-text2 hover:text-dark-blue'}>{item.fname}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="setlogout-wrapper p-10 flex-2">
        <ul>
          <li className='my-4 w-full'>
            <div className="option-wrapper flex items-center gap-6 w-full cursor-pointer">
              <div className="logo"><MdSettings fill='#9A9A9A' size='30px' /></div>
              <div className='text-xl text-text2 hover:text-text'>Settings</div>
            </div>
          </li>
          <li className='my-4 w-full'>
            <div className="option-wrapper flex items-center gap-6 w-full cursor-pointer ">
              <div className="logo"><FiLogOut color='#9A9A9A' size='30px'/></div>
              <div className='text-xl text-text2 hover:text-text'>Log Out</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenuBar