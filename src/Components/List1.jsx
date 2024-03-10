import React from 'react'
import table1 from '../assets/table1.jpg'
import TableInput from './TableList1/TableInput'
import TableLists from './TableList1/tableLists'
import TableNatija from './TableList1/tableNatija'
import Button from '../UI/button'

function List1() {
  return (
    <div className='min-h-[100vh] px-10 md:px-10 flex justify-center flex-col'>
      <div className='flex mt-10 justify-center items-start'>
        <div>
          <p className="text-2xl">Qiymatlarni kiritish</p>
          <TableInput />
        </div>
      </div>
      <div className='flex my-10 justify-center gap-16 items-center'>
        <div>
          <h1 className="text-2xl">Ozgarmas qiymatlar </h1>
          <TableLists />
        </div>
        <div>
          <h1 className="text-2xl">Natiyja </h1>
          <TableNatija/>
        </div>
      </div>
      <img src={table1} alt="" />
    </div>
  )
}

export default List1