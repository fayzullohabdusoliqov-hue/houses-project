import React, { useEffect, useState } from 'react'
import "./Home.css"
import HomeCard from '../../components/HomeCard/HomeCard'
import HomeOweners from '../../components/HomeOweners/HomeOweners'
import HomeSold from '../../components/HomeSold/HomeSold'
import Loading from '../../components/Loading/Loading'

function Home() {
  const [oweners, setOweners] = useState([])
  const [solds, setSolds] = useState([])
  const [owenerLoading, setOwenerLoading] = useState(false)
  const [soldLoading, setSoldLoading] = useState(false)
  
  async function getOweners(){
    try{
      setOwenerLoading(true)
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/oweners.json`)
      const data = await res.json()
      
      if(data){
        const firebaseKey = Object.entries(data).map(([key, value]) => ({...value, firebaseKey: key}))
        const filterNull = firebaseKey.filter((el) => el !== null)
        setOweners(filterNull)
      }else{
        setOweners(data)
      }
    }catch(err){
      console.log(err.message)
    }finally{
      setOwenerLoading(false)
    }
  }

  async function getSolds(){
    try{
      setSoldLoading(true)
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/solds.json`)
      const data = await res.json()
      setSolds(data)
    }catch(err){
      console.log(err.message)
    }finally{
      setSoldLoading(false)
    }
  }

  useEffect(() => {
    getOweners()
    getSolds()
  },[])

  return (<main className='site__main'>
    <section className="dashboard">
      <div className="conteyner">
        <h1 className="dashboard_title">DASHBOARD</h1>
        <div className="dashboard__wraper">
          <HomeCard title={"Uylar soni:"} info={0}/>
          <HomeCard title={"Arendadagi uylar:"} info={0}/>
          <HomeCard title={"Uylar narhi:"} info={0}/>
          <HomeCard title={"Oylik daromat:"} info={0}/>
        </div>
      </div>
    </section>
    <section className="oweners">
      <div className="conteyner">
        {
          owenerLoading? <Loading/> :<><h2 className="oweners_title">UY EGALARI</h2>
          <ul className="oweners__list">
            {
              oweners? oweners.map((el, index) => <HomeOweners key={index} owener={el} index={index}/>) 
                :<div className='oweners__null'>
                  <h4 className="oweners_subtitle">UY EGALARI YO'Q</h4>
                </div>
            }
          </ul></>
        }
      </div>
    </section>
    <section className="sold">
      <div className="conteyner">
        {
          soldLoading? <Loading/> : <><h2 className="sold_title">SOTILGAN UYLAR</h2>
          <ul className="sold__list">
            {
              solds? solds.map((el, index) => <HomeSold key={index} sold={el} index={index}/>)
                :<div className='solds__null'>
                  <h4 className="solds_subtitle">SOTILGAN UYLAR YO'Q</h4>
                </div>
            }
          </ul></>
        }
      </div>
    </section>
  </main>)
}

export default Home
