import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useLocation, useNavigate } from 'react-router-dom'
import moon from "../../../public/icon/moon.png"
import sun from "../../../public/icon/sun.png"
import logoutDark from "../../../public/icon/logoutBlack.png"
import logoutLight from "../../../public/icon/logoutLight.png"
import addDark from "../../../public/icon/addBlack.png"
import addLight from "../../../public/icon/addLight.png"

function Header({setMode, mode, setOpenModal}) {
  const navigate = useNavigate("")
  const location = useLocation()
  const token = localStorage.getItem("token")
  const localId = localStorage.getItem("localId")
  const [profile, setProfile] = useState({})

  async function getProfile(){
    try{
        const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/profile/${localId}.json?auth=${token}`)
        const data = await res.json()
        setProfile(data)
    }catch(err){
        console.log(err.message)
    }
  }
  useEffect(() => {
    getProfile()
  },[])

  return (<header className='site__header'>
    <div className="conteyner header__wraper">
        {
            profile? <div className="header__content">
                <img src={profile?.img} alt="" className="header_img" />
                <div className="header_profile">
                    <h3 className="header_title">{profile?.name}</h3>
                    <small className="header_small">{profile?.email}</small>
                </div>
            </div> : <div className="header__content">
                <div className="header_img"></div>
                <div className="header_profile">
                    <h3 className="header_title">U.USERS</h3>
                    <small className="header_small">user@gmail.com</small>
                </div>
            </div>
        }
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
            {
                location.pathname == "/layout/dashboard"?
                  <button className="header_btn" onClick={(evt) => {
                    evt.preventDefault()
                    setOpenModal({open: true, name: "owener"})
                  }}><img src={mode? addDark : addLight} width={15} alt="" /></button> :
                location.pathname == "/layout/table"?
                  <button className="header_btn" onClick={(evt) => {
                    evt.preventDefault()
                    setOpenModal({open: true, name: "house"})
                  }}><img src={mode? addDark : addLight} width={15} alt="" /></button> : 
                <></>
            }
        </div>
    </div>
  </header>)
}

export default Header
