import React, { useEffect, useState } from 'react'
import "./ModalHouse.css"

function ModalHouse({setOpenModal}) {
  const [oweners, setOweners] = useState([])
  const [house, setHouse] = useState({name: "", owener: "", date: "", price: 0})

  async function getOweners(){
    try{
      const res = await fetch("https://houses-project-1e584-default-rtdb.firebaseio.com/oweners.json")
      const data = await res.json()
      
      if(data){
        const Array = Object.values(data)
        const filterNull = Array.filter((el) => el !== null)
        setOweners(filterNull)
      }else{
        setOweners(data)
      }
    }catch(err){
      console.log(err.message)
    }
  }
  async function postHouse(){
    if(!house.date || !house.name || !house.owener) return

    try{
      const res = await fetch("https://houses-project-1e584-default-rtdb.firebaseio.com/tables.json",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(house)
      })
      const data = await res.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }finally{
      window.location.reload()
    }
  }
  useEffect(() => {
    getOweners()
  },[])

  return (<div className='house__modal'>
    <form className="house__form" onSubmit={(evt) => {
      evt.preventDefault()
      postHouse()
    }}>
      <div className="house__head">
        <h2 className="house_title">UY QO'SHISH</h2>
        <button className="house_btn" onClick={(evt) => {
          evt.preventDefault()
          setOpenModal(false)
        }}>&times;</button>
      </div>
      <div className="house__content">
        <label htmlFor="name" className="house_label">Uy ismi:</label>
        <input id='name' type="text" className="house_input" onChange={(evt) => {
          setHouse({...house, name: evt.target.value})
        }}/>
      </div>
      <select className="house_select" onChange={(evt) => {
        setHouse({...house, owener: evt.target.value})
      }}>
        <option value={""} className="house_option">Uy egasini tanlang</option>
        {
          oweners? oweners.map((el, index) => <option key={index} className="house_option" value={el.name}>{el.name}</option>) 
            : <option value={"mavjud emas"} className="house_option">uy egalari yo'q</option>
        }
      </select>
      <div className="house__content">
        <label htmlFor="date" className="house_label">To'lo'v vaqtlari:</label>
        <input id='date' type="date" className="house_input" onChange={(evt) => {
          setHouse({...house, date: evt.target.value})
        }}/>
      </div>
      <div className="house__content">
        <label htmlFor="price" className="house_label">Uy sotib olingan narxi:</label>
        <input id='price' type="number" className="house_input" onChange={(evt) => {
          setHouse({...house, price: evt.target.value})
        }}/>
      </div>
      <button className="house_btn">Jo'natish</button>
    </form>
  </div>)
}

export default ModalHouse
