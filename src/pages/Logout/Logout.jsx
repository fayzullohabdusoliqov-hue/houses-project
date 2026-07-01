import React, { useEffect, useState } from 'react'
import './Logout.css'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const [info, setInfo] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate("")
  const token = localStorage.getItem("token")
  const localId = localStorage.getItem("localId")

  async function login(info){
    try{
      const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMcAtMYKRuj2q0SqLdsjKyiadip07ZWls`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
      })
      const data = await res.json()
      localStorage.setItem("token", data?.idToken)
      localStorage.setItem("localId", data?.localId)
      navigate("/layout")
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(token && localId){
      navigate("/layout")
    }
  },[])

  return (<div className='body'>
      <div className="logout">
        <div className="conteyner logout__wraper">
          <form className="logout__form">
            <h1 className="logout_title">LOGIN</h1>
            <div className="logout__content">
              <label htmlFor="email" className="logout_label">email</label>
              <input type="email" id='email' className="logout_input" onChange={(evt) => setInfo({...info, email: evt.target.value})}/>
            </div>
            <div className="logout__content">
              <label htmlFor="password" className="logout_label">password</label>
              <input type="password" id='password' className="logout_input" onChange={(evt) => setInfo({...info, password: evt.target.value})}/>
            </div>
            <button className="logout_btn" onClick={(evt) => {
              evt.preventDefault()
              login(info)
            }}>sign in</button>
          </form>
        </div>
      </div>
  </div>)
}

export default Logout
