import React, { useEffect, useState } from 'react'
import "./ModalEditSold.css"

function ModalEditSold({setOpenModal, firebaseKey}) {
  const [sold, setSold] = useState({})

  async function getSold(){
    try{
        const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/solds/${firebaseKey}.json`)
        const data = await res.json()
        
        setSold(data)
    }catch(err){
        console.log(err.message)
    }
  }
  async function patchSold(){
    try{
        const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/solds/${firebaseKey}.json`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sold)
        })
        const data = res.json()
        console.log(data)
    }catch(err){
        console.log(err.message)
    }finally{
        window.location.reload()
    }
  }
  useEffect(() => {
    getSold()
  },[])

  return (<div className='sold__modal'>
    <form className="sold__form" onSubmit={(evt) => {
        evt.preventDefault()
        patchSold()
    }}>
        <div className="sold__head">
            <h2 className="sold_title">SOTILGAN UYNING MA'LUMOTINI O'ZGARTIRISH</h2>
            <button className="sold_btn" onClick={(evt) => {
                evt.preventDefault()
                setOpenModal(false)
            }}>&times;</button>
        </div>
        <div className="sold__content">
            <label htmlFor="price" className="sold_label">Uy sotilgan narxi:</label>
            <input id='price' type="number" className="sold__input" defaultValue={sold?.priceBuy} onChange={(evt) => {
                setSold({...sold, priceBuy: evt.target.value})
            }}/>
        </div>
        <div className="sold__content">
            <label htmlFor="name" className="sold_label">Uy ismi:</label>
            <input id='name' type="text" className="sold__input" defaultValue={sold?.name} onChange={(evt) => {
                setSold({...sold, name: evt.target.value})
            }}/>
        </div>
        <button className="sold_btn">Jo'natish</button>
    </form>
  </div>)
}

export default ModalEditSold
