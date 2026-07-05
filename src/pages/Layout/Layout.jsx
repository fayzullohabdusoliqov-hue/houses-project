import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Layout.css"
import ModalOwener from '../../components/Modal/ModalOwener'
import ModalHouse from '../../components/Modal/ModalHouse'

function Layout({setMode, mode}) {
  const [openModal, setOpenModal] = useState({open: false, name: ""})

  return (<div className='body layout__wraper'>
    <Header setMode={setMode} mode={mode} setOpenModal={setOpenModal}/>
    <Sidebar/>
    {
      openModal.open? 
        openModal.name === "owener"? 
        <ModalOwener setOpenModal={setOpenModal} firebaseKey={""}/> : <ModalHouse setOpenModal={setOpenModal} firebaseKey={""}/> 
      : <></>
    }
    <Outlet/>
  </div>)
}

export default Layout
