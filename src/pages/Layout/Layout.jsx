import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Layout.css"

function Layout({setMode, mode}) {
  return (<div className='body layout__wraper'>
    <Header setMode={setMode} mode={mode}/>
    <Sidebar/>
    <Outlet/>
  </div>)
}

export default Layout
