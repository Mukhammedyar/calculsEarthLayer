import React from 'react'
import TableConst from './List2Table/table'
import table2 from '../assets/table2.jpg'
import TableInput from './List2Table/tableInput/TableInput'


function List2() {
  
  return (
    <div className='px-10 py-10'>
      <TableConst />
      <TableInput/>
      <img src={table2} alt="" />
    </div>
  )
}

export default List2