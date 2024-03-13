import React from 'react'

export default function List2Head() {
  return (
        <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    className="border-r py-4 border-neutral-300">
                    HCO<sub>3</sub>
                </th>
                <th
                    scope="col"
                    className="border-r px-2 border-neutral-300">
                    CI
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    CO
                    <sub>4</sub>
                    <sup>-2</sup>
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    Ca
                    <sup>+2</sup>
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    Mg
                    <sup>+2</sup>
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    Na
                    <sup>+</sup>
                </th>
            </tr>
        </thead>
  )
}
