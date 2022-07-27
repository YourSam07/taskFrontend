import React from 'react'
import { RiSearchLine } from "react-icons/ri"

const DashHead = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className="search relative">
        <input type="text" name="" id="" placeholder='Search' className/>
        <div><RiSearchLine fill="#9A9A9A"/></div>
      </div>
    </div>
  )
}

export default DashHead