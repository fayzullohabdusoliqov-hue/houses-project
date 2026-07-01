import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import moon from "../../../public/icon/moon.png"
import sun from "../../../public/icon/sun.png"
import logoutDark from "../../../public/icon/logoutBlack.png"
import logoutLight from "../../../public/icon/logoutLight.png"
import addDark from "../../../public/icon/addBlack.png"
import addLight from "../../../public/icon/addLight.png"

function Header({setMode, mode}) {
  const navigate = useNavigate("")

  return (<header className='site__header'>
    <div className="conteyner header__wraper">
        <div className="header__content">
            <div className="header_img"></div>
            <div className="header_profile">
                <h3 className="header_title">A.VOSIT</h3>
                <small className="header_small">vosit@gmail.com</small>
            </div>
        </div>
        <div className="header__btn">
            <button className="header_btn" onClick={(evt) => {
                evt.preventDefault()
                setMode(!mode)
            }}><img src={mode? moon : sun} width={20} alt="" /></button>
            <button className="header_btn" onClick={(evt) => {
                evt.preventDefault()
                localStorage.clear("token")
                localStorage.clear("localId")
                navigate("/logout")
            }}><img src={mode? logoutDark : logoutLight} width={20} alt="" /></button>
            <button className="header_btn">
                <img src={mode? addDark : addLight} width={15} alt="" />
            </button>
        </div>
    </div>
  </header>)
}

export default Header
