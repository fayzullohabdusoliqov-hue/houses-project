import React from 'react'

function TableItem({table, index}) {
  return (<tr className="table_tr">
    <td className="table_td">{index + 1}</td>
    <td className="table_td">{table?.name}</td>
    <td className="table_td">{table?.owener}</td>
    <td className="table_td">{table?.date}</td>
    <td className="table_td">{table?.price}</td>
    <td className="table_td">person</td>
    <td className="table_td">
      <button className="table_btn">E</button>
      <button className="table_btn">D</button>
    </td>
  </tr>)
}

export default TableItem
