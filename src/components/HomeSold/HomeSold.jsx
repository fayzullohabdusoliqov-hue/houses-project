import React, { useState } from 'react'
import "./HomeSold.css"

function HomeSold({sold, index, setOpenEditSoldModal, setSoldFirebaseKey}) {

  async function deleteSold(firebaseKey){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/solds/${firebaseKey}.json`,{
        method: "Delete",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }finally{
      window.location.reload()
    }
  }

  return (<li className='sold_item'>
    <div className="sold_info">
      <span className="sold_id">#{index + 1}</span>
      <strong className="sold_sum">{sold.priceBuy} so'm</strong>
    </div>
    <div className="sold__content">
      <div className="sold_info">
        <h3 className="sold_subtitle">{sold.owener}</h3>
        <p className="sold_text">{sold.name}</p>
      </div>
      <div className="sold__btn">
        <button className="sold_btn" onClick={(evt) => {
          evt.preventDefault()
          setSoldFirebaseKey(sold.firebaseKey)
          setOpenEditSoldModal(true)
        }}>E</button>
        <button className="sold_btn" onClick={(evt) => {
          evt.preventDefault()
          deleteSold(sold.firebaseKey)
        }}>D</button>
      </div>
    </div>
  </li>)
}

export default HomeSold
