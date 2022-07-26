import React from 'react'
import pic from "../images/homepage.svg" 

const Home = () => {
  return (
    <div className="container flex items-center justify-center">
      <div className="wrapper flex flex-">
        <div className="img-wrapper">
          <img src={pic} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home