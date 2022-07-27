import React, { useState } from 'react'
import pic from "../images/homepage.svg"
import { BiErrorCircle } from 'react-icons/bi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Home = () => {
  const [login, setLogin] = useState(true)
  const [signUp, setSignUp] = useState(false)
  const [seepass, setSeePass] = useState(false)
  const [passType, setPassType] = useState(false)
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const click = (type) => {
    if (type === "log") {
      setLogin(true)
      setSignUp(false)
    }
    if (type === "sign") {
      setLogin(false)
      setSignUp(true)
    }
  }

  const seePassword = () => {
    setPassType(!passType)
    setSeePass(!seepass)
  }
  return (
    <div className="container px-2 min-h-screen min-w-full flex items-center justify-center">
      <div className="wrapper flex md:flex-row md:justify-between w-full xl:px-8 xxl:px-32 xxl:gap-12">
        <div className="img-wrapper hidden md:flex md:items-center md:justify-center md:w-4/12 lg:m-2 xl:w-6/12 xl:p-20">
          <img src={pic} alt="" />
        </div>
        <div className="right w-full sm:p-12 md:p-8 md:w-8/12 lg:p-16 xl:p-8 xl:w-6/12 xxl:p-20">
          <div className="form-card p-10 border rounded-4xl border-slate-900 w-full">
            <div className="head flex gap-8 text-2xl font-medium">
              <span className={login ? "text-dark-blue cursor-pointer" : "text-gray-blue cursor-pointer"} onClick={() => click("log")}>Log In
                <div className={login ? "block h-1 w-3.5 bg-dark-blue" : "hidden"}></div>
              </span>
              <span className={signUp ? "text-dark-blue cursor-pointer" : "text-gray-blue cursor-pointer"} onClick={() => click("sign")}>Sign Up
                <div className={signUp ? "block h-1 w-3.5 bg-dark-blue" : "hidden"}></div>
              </span>
            </div>

            <div className="form py-7 px-4">
              <div className="line bg-line h-0.5 w-full"></div>

              <div className="stuff my-5 ">
                <h2 className='text-dark-blue text-bold text-xl'>To Continue</h2>
                <p className='text-gray text-sm'>We need your Name & Email</p>
              </div>

              {login ?
                <form className='flex flex-col'>
                  <input type="text" name="email" placeholder='Email' className='text-dark-blue my-2 px-4 py-2 rounded-md border border-border placeholder:text-ph' />
                  <div className="pass-wrapper relative">
                    <input type={passType ? 'text ' : 'password'} name="pwd" placeholder='Password' className='text-dark-blue relative my-2 px-4 py-2 rounded-md border w-full border-border placeholder:text-ph' />
                    <div className="passicon absolute cursor-pointer top-[35%] left-[92%]" onClick={seePassword}>{seepass ? <AiFillEyeInvisible fill='#B7C0C9' /> : <AiFillEye fill='#B7C0C9' />}</div>
                  </div>
                  <div className="error flex items-center justify-center gap-2 text-error"><BiErrorCircle fill='#F65B2A' /><span> Please Enter Valid email</span></div>
                  <button type='submit' className='p-2 rounded-md bg-green hover:bg-hovgreen w-full text-[#ffffff] text-lg my-2'>Log In</button>
                  <div className='my-2 flex gap-2 text-sm'><input type="checkbox" name="" id="" className='accent-green' /> Remember Me</div>
                </form> :
                <form className='flex flex-col'>
                  <input type="text" name="username" placeholder='Full Name' className='text-dark-blue my-2 px-4 py-2 rounded-md border border-border placeholder:text-ph' onChange={(e) => setUser({ ...user, fullname: e.target.value })} />
                  <input type="text" name="email" placeholder='Email' className='text-dark-blue my-2 px-4 py-2 rounded-md border border-border placeholder:text-ph' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                  <div className="pass-wrapper relative">
                    <input type={passType ? 'text ' : 'password'} name="pwd" placeholder='Password' className=' text-dark-blue my-2 px-4 py-2 w-full rounded-md border border-border placeholder:text-ph' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <div className="passicon absolute cursor-pointer top-[35%] left-[92%]" onClick={seePassword}>{seepass ? <AiFillEyeInvisible fill='#B7C0C9' /> : <AiFillEye fill='#B7C0C9' />}</div>
                  </div>
                  <div className="error flex items-center justify-center gap-2 text-error"><BiErrorCircle fill='#F65B2A' /><span> Please Enter Valid email</span></div>
                  <button type='submit' className='p-2 rounded-md bg-green  hover:bg-hovgreen w-full text-[#ffffff] text-lg my-2'>Sign Up</button>
                  <div className='my-2 flex gap-2 text-sm'><input type="checkbox" name="" id="" className='accent-green' /> Remember Me</div>
                </form>}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home