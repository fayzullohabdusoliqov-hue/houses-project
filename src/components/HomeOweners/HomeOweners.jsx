import React from 'react'
import "./HomeOweners.css"

function HomeOweners({owener}) {
  return (<li className="owener_item">
    <div className="owener_info">
      <span className="owener_id">#{owener.id}</span>
      <div className="owener_img"></div>
    </div>
    <div className="owener__content">
      <div className="owener_info">
        <h3 className="owener_name">{owener.name} {owener.username}</h3>
        <span className="owener_tel">{owener.tel}</span>
      </div>
      <div className="owener__btn">
        <button className="owener_btn">E</button>
        <button className="owener_btn">D</button>
      </div>
    </div>
</li>)
}

export default HomeOweners
