import React, { useContext } from 'react'
import { RiSearchLine } from "react-icons/ri"
import { UserContext } from '../contexts/userContext'

const DashHead = () => {
  const [{currentUser}] =useContext(UserContext)
  return (
    <div className='flex items-center justify-between w-full bg-slate-600'>
      <div className="search relative w-1/4">
        <input type="text" name="" id="" placeholder='Search' className='text-dark-blue px-8 py-2 placeholder:text-ph focus:rounded-md focus:outline-border' />
        <div className='absolute top-[28%] left-[3%]'><RiSearchLine fill="#9A9A9A" /></div>
      </div>
      <div className='w-1/4'></div>
      <div className='w-1/4 flex items-center gap-4 justify-end'>
        <div className="text-text">Hi {currentUser.name}</div>
        <div className='rounded-full bg-error h-9 w-9'>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default DashHead