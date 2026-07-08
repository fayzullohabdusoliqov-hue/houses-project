import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import "./TableDetail.css" 

function TableDetail() {
  const {firebaseKey} = useParams()
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState({})
  const today = new Date()

  async function getHouse(){
    try{
      setLoading(true)
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/tables/${firebaseKey}.json`)
      const data = await res.json()
      setInfo(data)

      let date = new Date(data?.monthlyDate)
      if(today >= date){
        date.setMonth(date.getMonth() + 1)
        patchDate(date.toISOString().split("T")[0])
      }  
    }catch(err){
      console.log(err.message)
    }finally{
      setLoading(false)
    }
  }
  async function patchDate(date){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/tables/${firebaseKey}.json`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          monthlyDate: date
        })
      })
    }catch(err){
      console.log(err.message)
    }finally{
      window.location.reload()
    }
  }
  useEffect(() => {
    getHouse()
  },[])

  return (<main className='site__main'>
    {
      loading? <Loading/> : <section className='info'>
        <div className="conteyner">
           <h1 className="houses_title">"{info?.name}" UYI HAQIDA MA'LUMOT</h1>
           <div className="info__wraper">
            <div className="info__content name">
              <h3 className="info_subtitle">UYNING JOYLASHUVI:</h3>
              <p className="info_text">{info?.name}</p>
            </div>
            <div className="info__content buy-date">
              <h3 className="info_subtitle">UY OLINGAN VAQT:</h3>
              <p className="info_text">{info?.buyDate}</p>
            </div>
            <div className="info__content buy-price">
              <h3 className="info_subtitle">UY OLINGAN NARX:</h3>
              <p className="info_text">{info?.buyPrice} so'm</p>
            </div>
            <div className="info__content owener">
              <h3 className="info_subtitle">UYNING EGASI:</h3>
              <p className="info_text">{info?.owener}</p>
            </div>
            <div className="info__content person">
              <h3 className="info_subtitle">UYDA ODAM BOR YOKI YO'Q:</h3>
              <p className="info_text">{info?.person ? "Odam bor" : "Odam yo'q"}</p>
            </div>
            <div className="info__content monthly-date">
              <h3 className="info_subtitle">ARENDA PULI KELADIGAN VAQT:</h3>
              <p className="info_text">{info?.monthlyDate}</p>
            </div>
            <div className="info__content monthly-price">
              <h3 className="info_subtitle">ARENDA PULI:</h3>
              <p className="info_text">{info?.monthlyPrice}$</p>
            </div>
           </div>
        </div>
      </section>
    }
  </main>)
}

export default TableDetail
