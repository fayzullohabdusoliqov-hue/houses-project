import React, { useEffect, useState } from 'react'
import "./Home.css"
import HomeCard from '../../components/HomeCard/HomeCard'
import HomeOweners from '../../components/HomeOweners/HomeOweners'
import HomeSold from '../../components/HomeSold/HomeSold'
import Loading from '../../components/Loading/Loading'
import ModalOwener from '../../components/Modal/ModalOwener'
import ModalEditSold from '../../components/Modal/ModalEditSold'

function Home() {
  const [oweners, setOweners] = useState([])
  const [solds, setSolds] = useState([])
  const [owenerLoading, setOwenerLoading] = useState(false)
  const [soldLoading, setSoldLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [firebaseKey, setFirebaseKey] = useState("")
  const [houses, setHouses] = useState(0)
  const [housesSum, setHousesSum] = useState(0)
  const [housesMonthlySum, setHouseMonthlySum] = useState(0)
  const [openEditSoldModal, setOpenEditSoldModal] = useState(false)
  const [soldFirebaseKey, setSoldFirebaseKey] = useState("")
  const [sumHouse, setSumHouse] = useState(0)
  
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
      
      if(data){
        const firebaseKey = Object.entries(data).map(([key, value]) => ({...value, firebaseKey: key}))
        const filterNull = firebaseKey.filter((el) => el !== null)
        setSolds(filterNull)
      }else{
        setSolds(data)
      }
    }catch(err){
      console.log(err.message)
    }finally{
      setSoldLoading(false)
    }
  }

  async function getHouses(){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/tables.json`)
      const data = await res.json()
      
      if(data){
        const array = Object.values(data)

        let sumBuy = 0
        let sumMonthly = 0
        let sumHouse = 0
        for(let i = 0; i < array.length; i++){
          sumBuy += Number(array[i].buyPrice)
          if(array[i].person){
            sumMonthly += Number(array[i].monthlyPrice)
            sumHouse += 1
          }
        }

        setHouses(array.length)
        setHousesSum(sumBuy)
        setHouseMonthlySum(sumMonthly)
        setSumHouse(sumHouse)
      }else{
        setHouses(0)
      }
    }catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    getOweners()
    getSolds()
    getHouses()
  },[])

  return (<main className='site__main'>
    <section className="dashboard">
      <div className="conteyner">
        <h1 className="dashboard_title">DASHBOARD</h1>
        <div className="dashboard__wraper">
          <HomeCard title={"Uylar soni:"} info={houses} content="ta"/>
          <HomeCard title={"Arendadagi uylar:"} info={sumHouse} content="ta"/>
          <HomeCard title={"Uylar narhi:"} info={housesSum} content="$"/>
          <HomeCard title={"Oylik daromat:"} info={housesMonthlySum} content="$"/>
        </div>
      </div>
    </section>
    <section className="oweners">
      <div className="conteyner">
        {
          owenerLoading? <Loading/> :<><h2 className="oweners_title">UY EGALARI</h2>
          <ul className="oweners__list">
            {
              oweners? oweners.map((el, index) => <HomeOweners key={index} owener={el} index={index} setOpenModal={setOpenModal} setFirebaseKey={setFirebaseKey}/>) 
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
              solds? solds.map((el, index) => <HomeSold key={index} sold={el} index={index} setOpenEditSoldModal={setOpenEditSoldModal} setSoldFirebaseKey={setSoldFirebaseKey}/>)
                :<div className='solds__null'>
                  <h4 className="solds_subtitle">SOTILGAN UYLAR YO'Q</h4>
                </div>
            }
          </ul></>
        }
      </div>
    </section>
    {
      openModal? <ModalOwener setOpenModal={setOpenModal} firebaseKey={firebaseKey}/> : <></>
    }
    {
      openEditSoldModal? <ModalEditSold setOpenModal={setOpenEditSoldModal} firebaseKey={soldFirebaseKey}/> : <></>
    }
  </main>)
}

export default Home
