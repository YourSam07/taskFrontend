import React, { useContext, useState } from 'react'
import pic from "../images/homepage.svg"
import { BiErrorCircle } from 'react-icons/bi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext';

const Home = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState(true)
  const [signUp, setSignUp] = useState(false)
  const [seepass, setSeePass] = useState(false)
  const [passType, setPassType] = useState(false)
  const [errMsg, setErrMsg] = useState()
  const [{setCurrentUser}] = useContext(UserContext)
  const [user, setUser] = useState({
    rememberMe: "false",
    name: '',
    email: '',
    password: '',
  })
  const [logincred, setLoginCred] = useState({
    email: '',
    password: '',
  })

  const click = (type) => {
    setErrMsg(null)
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

  const loginhandler = async (e) => {
    e.preventDefault()
    const jsonData = JSON.stringify(logincred)
    console.log(jsonData)
    try {
      const res = await axios.post('https://task-backend-youshd.herokuapp.com/api/user/login', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setCurrentUser({name: res.data.name, isloggedin: true})
      navigate('/dashboard')
    } catch (error) {
      setErrMsg(error.response.data.message)
    }
  }

  const signupHandler = async (e) => {
    e.preventDefault()
    const jsonData = JSON.stringify(user)
    try {
      const response = await axios.post('https://task-backend-youshd.herokuapp.com/api/user/signup', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      setSignUp(false)
      setLogin(true)
      setErrMsg(null)
    } catch (error) {
      console.log(error.response.data.message)
      setErrMsg(error.response.data.message)
    }
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
                  <input type="text" name="email" placeholder='Email' style={{ borderColor: errMsg ? '#F65B2A' : '#CBDBEA' }} className='text-dark-blue my-2 px-4 py-2 rounded-md border border-border placeholder:text-ph' onChange={(e) => setLoginCred({ ...logincred, email: e.target.value })} />
                  <div className="pass-wrapper relative">
                    <input type={passType ? 'text ' : 'password'} style={{ borderColor: errMsg ? '#F65B2A' : '#CBDBEA' }} name="pwd" placeholder='Password' className='text-dark-blue relative my-2 px-4 py-2 rounded-md border w-full border-border placeholder:text-ph' onChange={(e) => setLoginCred({ ...logincred, password: e.target.value })} />
                    <div className="passicon absolute cursor-pointer top-[35%] left-[92%]" onClick={seePassword}>{seepass ? <AiFillEyeInvisible fill='#B7C0C9' /> : <AiFillEye fill='#B7C0C9' />}</div>
                  </div>
                  {errMsg ? <div className="error flex items-center justify-center gap-2 text-error"><BiErrorCircle fill='#F65B2A' /><span>{errMsg}</span></div> : null}
                  <button onClick={(e) => loginhandler(e)} className='p-2 rounded-md bg-green hover:bg-hovgreen w-full text-[#ffffff] text-lg my-2'>Log In</button>
                  <div className='my-2 flex gap-2 text-sm'><input type="checkbox" name="" id="" className='accent-green' /> Remember Me</div>
                </form> :
                <form className='flex flex-col'>
                  <input type="text" name="username" placeholder='Full Name' className='text-dark-blue my-2 px-4 py-2 rounded-md border border-border placeholder:text-ph' onChange={(e) => setUser({ ...user, name: e.target.value })} />
                  <input type="email" name="email" placeholder='Email' className='text-dark-blue my-2 px-4 py-2 rounded-md border placeholder:text-ph' style={{ borderColor: errMsg ? '#F65B2A' : '#CBDBEA' }} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                  <div className="pass-wrapper relative">
                    <input type={passType ? 'text ' : 'password'} name="pwd" placeholder='Password' className=' text-dark-blue my-2 px-4 py-2 w-full rounded-md border border-border placeholder:text-ph' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <div className="passicon absolute cursor-pointer top-[35%] left-[92%]" onClick={seePassword}>{seepass ? <AiFillEyeInvisible fill='#B7C0C9' /> : <AiFillEye fill='#B7C0C9' />}</div>
                  </div>
                  {errMsg ? <div className="error flex items-center justify-center gap-2 text-error"><BiErrorCircle fill='#F65B2A' /><span>{errMsg}</span></div> : null}
                  <button onClick={(e) => signupHandler(e)} className='p-2 rounded-md bg-green  hover:bg-hovgreen w-full text-[#ffffff] text-lg my-2'>Sign Up</button>
                  <div className='my-2 flex gap-2 text-sm'><input type="checkbox" value="rememberMe" className='accent-green' onChange={(e) => setUser({ ...user, rememberMe: e.target.checked ? "true" : "false" })} /> Remember Me</div>
                </form>}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home