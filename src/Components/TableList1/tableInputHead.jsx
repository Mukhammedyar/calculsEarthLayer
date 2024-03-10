import React from 'react'

export default function TableInputHead() {
  return (
    <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    colSpan={3}
                    scope="col"
                    className="border-r min-w-[180px] md:min-w-[300px] py-4 border-neutral-300">
                    Қум
                </th>
                <th
                    colSpan={3}
                    scope="col"
                    className="border-r px-2 min-w-[190px] md:min-w-[300px] py-4 border-neutral-300">
                    Чаң
                </th>
                <th
                    colSpan={1}
                    scope="col"
                    className="border-r px-2 py-4 border-neutral-300">
                    Ил
                </th>
                <th
                    rowSpan={2}
                    scope="col"
                    className="border-r px-2 py-4 border-neutral-300">
                    Хажми огирлигиб г/см куб
                </th>
            </tr>
            
            <tr className='bg-gray-200'>
                <th
                    scope="col"
                    className="border-r py-4 font-medium border-neutral-300">
                    {" >0.25"}
                </th>
                <th
                    scope="col"
                    className="border-r py-4 font-medium border-neutral-300">
                    0.25-0.1
                </th>
                <th
                    scope="col"
                    className="border-r py-4 font-medium border-neutral-300">
                    0.1-0.05
                </th>
                <th
                    scope="col"
                    className="border-r py-4 font-medium border-neutral-300">
                    0.05-0.01
                </th>
                <th
                    scope="col"
                    className="border-r py-4 font-medium border-neutral-300">
                    0.01-0.005
                </th>
                <th
                    scope="col"
                    className="border-r py-4 font-medium border-neutral-300">
                    0.005-0.001
                </th>
                <th
                    scope="col"
                    className="border-r py-4 font-medium border-neutral-300">
                    {"<0.001"}
                </th>
            </tr>
        </thead>
  )
}
