import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (<aside className='site__sidebar'>
    <div className="conteyner sidebar__wraper">
      <ul className="sidebar__list">
        <li className="sidebar_item"><NavLink className={"sidebar_link"} to={"/layout/dashboard"}>home</NavLink></li>
        <li className="sidebar_item"><NavLink className={"sidebar_link"} to={"/layout/table"}>table</NavLink></li>
        <li className="sidebar_item"><NavLink className={"sidebar_link"} to={"/layout/statistics"}>stats</NavLink></li>
        <li className="sidebar_item"><NavLink className={"sidebar_link"} to={"/layout/profile"}>profile</NavLink></li>
      </ul>
    </div>
  </aside>)
}

export default Sidebar
