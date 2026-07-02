import React from 'react'
import "./Table.css"
import TableItem from '../../components/TableItem/TableItem'

function Table() {
  return (<main className='site__main'>
    <section className="houses">
      <div className="conteyner houses__wraper">
        <h1 className="houses_title">HOUSES</h1>
        <table className="houses_table">
          <thead className='table_header'>
            <tr className="table_tr">
              <th className="table_th">No'</th>
              <th className="table_th">Name</th>
              <th className="table_th">Owener</th>
              <th className="table_th">Price</th>
              <th className="table_th">Person</th>
              <th className="table_th">Button</th>
            </tr>
          </thead>
          <tbody className='table_main'>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
            <TableItem/>
          </tbody>
          <tfoot className='table_footer'>
            <tr className="table_tr">
              <th className="table_th" colSpan={6}>Vosit Ayubjanov</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </main>)
}

export default Table
