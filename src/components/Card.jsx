import React from 'react'
import { BsChatSquare } from "react-icons/bs"

const Card = ({title, desc, user}) => {
  return (
    <div className="card-wraper">
      <div className="card flex flex-col p-3 bg-[#FFFFFF] rounded-xl my-4">
        <div className="title text-lg my-2 text-text">{title}</div>
        <div className="desc text-sm text-text2 my-2">{desc}</div>
        <div className="user-sec flex justify-between my-2 items-center">
          <div className="circle rounded-full bg-error h-[25px] w-[25px]"></div>
          <BsChatSquare color='#999999' size='25px' />
        </div>
      </div>
    </div>
  )
}

export default Card