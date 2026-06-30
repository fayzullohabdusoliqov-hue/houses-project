import React from 'react'
import './Logout.css'

function Logout() {
  //AIzaSyAMcAtMYKRuj2q0SqLdsjKyiadip07ZWls
  return (<div className='body'>
      <div className="logout">
        <div className="conteyner logout__wraper">
          <form className="logout__form">
            <h1 className="logout_title">LOGIN</h1>
            <div className="logout__content">
              <label htmlFor="email" className="logout_label">email</label>
              <input type="email" id='email' className="logout_input" />
            </div>
            <div className="logout__content">
              <label htmlFor="password" className="logout_label">password</label>
              <input type="password" id='password' className="logout_input" />
            </div>
            <button className="logout_btn">sign in</button>
          </form>
        </div>
      </div>
  </div>)
}

export default Logout
