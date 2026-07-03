import React, { useState } from 'react'
import "./ModalOwener.css"

function ModalOwener({setOpenModal}) {
  const [owener, setOwener] = useState({name: "", userName: "", tel: "", image: ""})

  async function postOwener(){
    if(owener.name === "" || owener.userName === "") return;

    try{
        const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/oweners.json`,{
            method: "POST",
            headers: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify(owener)
        })
        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err.message)
    }finally{
        setOpenModal(false)
        window.location.reload()
    }
  }
  function stringifyImage(image){
      const reader = new FileReader()
      
      reader.readAsDataURL(image)
      reader.onload = () => {
        setOwener({...owener, image: reader.result})
      }
  }

  return (<div className='owener__modal'>
    <form className="owener__form" onSubmit={(evt) => {
        evt.preventDefault()
        postOwener()
    }}>
        <div className="form_head">
          <h2 className="form_title">UY EGASI QO'SHISH</h2>
          <button className="form_btn" onClick={(evt) => {
            evt.preventDefault()
            setOpenModal(false)
          }}>&times;</button>
        </div>
        <div className="form__content">
          <label htmlFor="name" className="form_label">Ism:</label>
          <input id='name' type="text" className="form_input" onChange={(evt) => {
            setOwener({...owener, name: evt.target.value})
          }}/>
        </div>
        <div className="form__content">
          <label htmlFor="userName" className="form_label">Familiya:</label>
          <input id='userName' type="text" className="form_input" onChange={(evt) => {
            setOwener({...owener, userName: evt.target.value})
          }}/>
        </div>
        <div className="form__content">
          <label htmlFor="tel" className="form_label">Telefon:</label>
          <input id='tel' type="tel" className="form_input" onChange={(evt) => {
            setOwener({...owener, tel: evt.target.value})
          }}/>
        </div>
        <div className="form__content">
          <label htmlFor="image" className="form_label">Rasim:</label>
          <input id='image' type="file" className="form_input" onChange={(evt) => {
            stringifyImage(evt.target.files[0])
          }}/>
        </div>
        <button className="form_submit">Jo'natish</button>
    </form>
  </div>)
}

export default ModalOwener
