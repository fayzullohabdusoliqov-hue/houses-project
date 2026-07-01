import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

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
            }}>M</button>
            <button className="header_btn" onClick={(evt) => {
                evt.preventDefault()
                localStorage.clear("token")
                localStorage.clear("localId")
                navigate("/logout")
            }}>L</button>
            <button className="header_btn">A</button>
        </div>
    </div>
  </header>)
}

export default Header
