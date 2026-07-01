import React from 'react'
import "./HomeCard.css"

function HomeCard({title, info}) {
  return (<div className='dashboard_card'>
    <h3 className="dashboard_subtitle">{title}</h3>
    <strong className="dashboard_strong">{info}</strong>
  </div>)
}

export default HomeCard
