import React from 'react'
import { useNavigate } from 'react-router-dom'

function TableItem({table, index, setFirebaseKey, setOpenModal}) {
  const navigate = useNavigate("")

  async function deleteTable(firebaseKey){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/tables/${firebaseKey}.json`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }finally{
      window.location.reload()
    }
  }
  async function postTable(table){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/solds.json`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(table)
      })
      const data = await res.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }
  }

  async function patchPerson(){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/tables/${table?.firebaseKey}.json`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          person: !table?.person
        })
      })
      const data = await res.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }finally{
      window.location.reload()
    }
  }

  return (<tr className="table_tr">
    <td className="table_td">{index + 1}</td>
    <td className="table_td">{table?.name}</td>
    <td className="table_td">{table?.owener}</td>
    <td className="table_td">{table?.buyDate}</td>
    <td className="table_td">{table?.buyPrice} so'm</td>
    <td className="table_td">{table?.monthlyDate}</td>
    <td className="table_td">{table?.monthlyPrice}$</td>
    <td className="table_td"><button className={"table_btn"} onClick={(evt) => {
      evt.preventDefault()
      navigate(`/layout/tableDetail/${table?.firebaseKey}`)
    }}>info</button>
    <button className={table?.person ? 'table_btn green' : 'table_btn red'} onClick={(evt) => {
      evt.preventDefault()
      patchPerson()
    }}>person</button>
    </td>
    <td className="table_td">
      <button className="table_btn" onClick={(evt) => {
        evt.preventDefault()
        setFirebaseKey(table.firebaseKey)
        setOpenModal(true)
      }}>E</button>
      <button className="table_btn" onClick={(evt) => {
        evt.preventDefault()
        postTable({
          date: table.date,
          name: table.name,
          owener: table.owener,
          priceBuy: table.buyPrice
        })
        deleteTable(table.firebaseKey)
      }}>D</button>
    </td>
  </tr>)
}

export default TableItem
