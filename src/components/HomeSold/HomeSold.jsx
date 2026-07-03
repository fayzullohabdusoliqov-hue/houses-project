import React from 'react'
import "./HomeSold.css"

function HomeSold({sold, index}) {
  return (<li className='sold_item'>
    <div className="sold_info">
      <span className="sold_id">#{index + 1}</span>
      <strong className="sold_sum">so'm</strong>
    </div>
    <div className="sold__content">
      <div className="sold_info">
        <h3 className="sold_subtitle">{sold.owener}</h3>
        <p className="sold_text">{sold.houseName}</p>
      </div>
      <div className="sold__btn">
        <button className="sold_btn">E</button>
        <button className="sold_btn">D</button>
      </div>
    </div>
  </li>)
}

export default HomeSold
