import React from 'react'
import "./HomeOweners.css"

function HomeOweners({owener, index, setOpenModal, setFirebaseKey}) {
  
  async function deleteOwener(firebaseKey){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/oweners/${firebaseKey}.json`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await res.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }finally{
      window.location.reload()
    }
  }

  return (<li className="owener_item">
    <div className="owener_info">
      <span className="owener_id">#{index + 1}</span>
      {
        owener.image? <img src={owener.image} className='owener_img' alt="" /> : <div className="owener_img"></div>
      }
    </div>
    <div className="owener__content">
      <div className="owener_info">
        <h3 className="owener_name">{owener.name} {owener.userName}</h3>
        <span className="owener_tel">{owener.tel}</span>
      </div>
      <div className="owener__btn">
        <button className="owener_btn" onClick={(evt) => {
          evt.preventDefault()
          setFirebaseKey(owener.firebaseKey)
          setOpenModal(true)
        }}>E</button>
        <button className="owener_btn" onClick={(evt) => {
          evt.preventDefault()
          deleteOwener(owener.firebaseKey)
        }}>D</button>
      </div>
    </div>
</li>)
}

export default HomeOweners
