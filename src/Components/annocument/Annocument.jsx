import React from "react"
import './style.css'
const Annocument = () => {
  const bannerstyle = {
    width: "30%",
    height: "340px",
  }
  const bannerstyle1 = {
    width: "68%",
    height: "340px",
  }
  const bannerimgstyle = {
    width: "100%",
    height: "100%",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={bannerstyle}>
            <img src='./images/banner-1.png' style={bannerimgstyle} alt="" />
          </div>
          <div className='img' style={bannerstyle1}>
            <img src='./images/banner-2.png' style={bannerimgstyle} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
