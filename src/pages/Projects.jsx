import React, { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import Card from '../components/Card'

const Projects = () => {
  const [add, setadd] = useState(false)
  return (
    <div className="pro-conatiner px-10 pt-6">
      <div className="head flex justify-between items-center">
        <div className="heading text-2xl text-text flex-1">Projects</div>
        <div className="filter flex items-center gap-3 flex-3">
          <BsFilter fill='#212121' />
          <span className='text-text'>Filter</span>
        </div>
      </div>
      <div className="rest relative flex">
        <div className="box w-1/3 p-4">
          <div className="bg-list rounded-tl-2xl rounded-tr-2xl h-[535px]">
            <div className="list-head flex justify-between p-6">
              <div className="title flex- 1 text-text">To do</div>
              <div className="num bg-[#ECF3F3] p-1 text-green">2</div>
            </div>
            <div className="add-wrapper px-6 w-full">
              <button onClick={() => setadd(true)} className="add bg-[#ECF3F3] w-full text-green text-center p-2 rounded-lg cursor-pointer hover:scale-105">+</button>
            </div>
            <div className="card-sec px-6">
              <Card title="FrontEnd" desc="Loreharum blanditiis ea delectus oluptatibus enim voluptate mollitia ipsum, veniam eos, sapiente hic quibusdam vel ratione ipsa!" />
              <Card title="BackEnd" desc="Lorem ipsum dolor  ipsum, veniam eos, sapiente hic quibusdam vel ratione ipsa!" />
            </div>

          </div>
        </div>
        <div className="box w-1/3 p-4">
          <div className="bg-list rounded-tl-2xl rounded-tr-2xl h-[535px]">
            <div className="list-head flex justify-between p-6">
              <div className="title flex- 1 text-text">Progress</div>
              <div className="num bg-[#ECF3F3] p-1 text-green">1</div>
            </div>
            <div className="add-wrapper px-6 w-full">
              <button onClick={() => setadd(true)} className="add bg-[#ECF3F3] w-full text-green text-center p-2 rounded-lg cursor-pointer hover:scale-105">+</button>
            </div>
            <div className="card-sec px-6"><Card title="Hello World" desc="Lorem ipsum dolor  ipsum, veniam eos, sapiente hic quibusdam vel ratione ipsa!" /></div>
          </div>
        </div>
        <div className="box w-1/3 p-4">
          <div className="bg-list rounded-tl-2xl rounded-tr-2xl h-[535px]">
            <div className="list-head flex justify-between p-6">
              <div className="title flex- 1 text-text">Completed</div>
              <div className="num bg-[#ECF3F3] p-1 text-green">0</div>
            </div>
            <div className="add-wrapper px-6 w-full">
              <button onClick={() => setadd(true)} className="add bg-[#ECF3F3] w-full text-green text-center p-2 rounded-lg cursor-pointer hover:scale-105">+</button>
            </div>
            <div className="card-sec px-6"></div>
          </div>
        </div>
      </div>
      {add ? <div className="addsec">
        <div className="close absolute min-h-screen w-full z-10 top-0 left-0" onClick={() => setadd(false)}></div>
        <div className="createCard-wrapper bg-[#FFFFFF] w-1/3 p-6 float-right h-[535px] absolute bottom-0 left-[66.5%] z-50 rounded-xl">
          <div className="enterTitle">
            <input type="text" name="desc" id="" className='px-4 py-2 text-text w-full border rounded-lg border-ph' />
            <div className="lin bg-green m-2 h-1 w-8"></div>
            <div className="creator flex my-6 items-center gap-6">
              <span className='text-sm text-text2'>Created By:</span>
              <span><div className="circle rounded-full bg-error h-[20px] w-[20px]"></div></span>
            </div>
            <div className="desc flex my-6 gap-6 items-center w-full">
              <span className='text-sm text-text2'>Description:</span>
              <span className='text-sm text-text w-full'>
                <input type="text" name="desc" id="" className='px-4 py-2 text-text w-full border rounded-lg border-ph' />
              </span>
            </div>
          </div>
        </div>

      </div> : null}
    </div>
  )
}

export default Projects