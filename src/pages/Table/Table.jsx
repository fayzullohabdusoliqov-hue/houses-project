import React, { useEffect, useState } from 'react'
import "./Table.css"
import TableItem from '../../components/TableItem/TableItem'
import Loading from '../../components/Loading/Loading'
import ModalHouse from '../../components/Modal/ModalHouse'

function Table() {
  const [tables, setTables] = useState([])
  const [loading, setLoading] = useState(false)
  const [firebaseKey, setFirebaseKey] = useState("")
  const [openModal, setOpenModal] = useState(false)

  async function getTables(){
    try{
      setLoading(true)
      const res = await fetch("https://houses-project-1e584-default-rtdb.firebaseio.com/tables.json")
      const data = await res.json()

      if(data){
        const firebaseKey = Object.entries(data).map(([key, value]) => ({...value, firebaseKey: key}))
        const filterNull = firebaseKey.filter((el) => el !== null)
        setTables(filterNull)
      }else{
        setTables(data)
      }
    }catch(err){
      console.log(err.message)
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    getTables()
  },[])

  return (<main className='site__main'>
    <section className="houses">
      <div className="conteyner houses__wraper">
        <h1 className="houses_title">HOUSES</h1>
        {loading? <Loading/> : 
        <table className="houses_table">
          <thead className='table_header'>
            <tr className="table_tr">
              <th className="table_th">No'</th>
              <th className="table_th">Name</th>
              <th className="table_th">Owener</th>
              <th className="table_th">Buy date</th>
              <th className="table_th">Buy price</th>
              <th className="table_th">Monthly date</th>
              <th className="table_th">Monthly price</th>
              <th className="table_th">info</th>
              <th className="table_th">Button</th>
            </tr>
          </thead>
          <tbody className='table_main'>
            {
              tables? tables.map((el, index) => <TableItem key={el.firebaseKey} table={el} index={index} setFirebaseKey={setFirebaseKey} setOpenModal={setOpenModal}/>)
              : <tr className='table_tr-null'>
                  <th className="table_th-null" colSpan={8}><h4 className="solds_subtitle">SOTIB OLINGAN UYLAR YO'Q</h4></th>
                </tr>
            }
          </tbody>
          <tfoot className='table_footer'>
            <tr className="table_tr">
              <th className="table_th" colSpan={9}>Vosit Ayubjanov</th>
            </tr>
          </tfoot>
        </table>}
        {
          openModal? <ModalHouse setOpenModal={setOpenModal} firebaseKey={firebaseKey}/> : <></>
        }
      </div>
    </section>
  </main>)
}

export default Table
