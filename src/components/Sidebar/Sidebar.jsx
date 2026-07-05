import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import home from "../../../public/icon/home.png"
import table from "../../../public/icon/table.png"
import profile from "../../../public/icon/profile.png"

function Sidebar() {
  return (<aside className='site__sidebar'>
    <div className="conteyner sidebar__wraper">
      <ul className="sidebar__list">
        <li className="sidebar_item"><img width={30} src={home} alt="" /><NavLink className={"sidebar_link"} to={"/layout/dashboard"}>home</NavLink></li>
        <li className="sidebar_item"><img width={30} src={table} alt="" /><NavLink className={"sidebar_link"} to={"/layout/table"}>table</NavLink></li>
        <li className="sidebar_item"><img width={30} src={profile} alt="" /><NavLink className={"sidebar_link"} to={"/layout/profile"}>profile</NavLink></li>
      </ul>
    </div>
  </aside>)
}

export default Sidebar
