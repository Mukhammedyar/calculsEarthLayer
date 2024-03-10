import React, { useState } from 'react'
import Input from '../UI/input'
import TableInputHead from './TableList1/tableInputHead';
import { useDispatch } from 'react-redux';
import { valueSetStart, valueSetSuccess } from '../Reducer/ValuesList1';
import TableNatija from './TableList1/tableNatija';

function List3() {
  const dispatch = useDispatch()
  const [jadvalQiymatlari, setJadvalQiymatlari] = useState(Array(8).fill(Array(8).fill('')));

  const handleChange = (row, col, event) => {
    const newJadvalQiymatlari = jadvalQiymatlari.map(row => [...row]);
    newJadvalQiymatlari[row][col] = event.target.value;
    setJadvalQiymatlari(newJadvalQiymatlari);
  };

  const saveAllValues = async () => {
    dispatch(valueSetStart())
    try {
      dispatch(valueSetSuccess([...jadvalQiymatlari]))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-10 flex items-start flex-col px-10 gap-5 h-[100vh]'>
      <table className='shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg'>
        <TableInputHead/>
        <tbody className=''>
          {jadvalQiymatlari.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className='w-[130px] border-r-[1px]'>
                  <input
                    type="number"
                    value={qiymat}
                    step={colIndex >= 6 ? 0.0001 : 0.001}
                    onChange={(event) => handleChange(rowIndex, colIndex, event)}
                    className={`
                      ${colIndex === 0 && +qiymat < 0.25
                        ? 'border-0 text-red-500'
                        : colIndex === 1 && (+qiymat < 0.1 || +qiymat > 0.25)
                        ? 'border-0 text-red-500'
                        : colIndex === 2 && (+qiymat < 0.05 || +qiymat > 0.1)
                        ? 'border-0 text-red-500'
                        : colIndex === 3 && (+qiymat < 0.01 || +qiymat > 0.05)
                        ? 'border-0 text-red-500'
                        : colIndex === 4 && (+qiymat < 0.005 || +qiymat > 0.01)
                        ? 'border-0 text-red-500'
                        : colIndex === 5 && (+qiymat <  0.001 || +qiymat > 0.005)
                        ? 'border-0 text-red-500'
                        : colIndex === 6 && +qiymat > 0.001
                        ? 'border-[1px] border-red-500 text-red-500'
                        : colIndex === 7 && +qiymat < 0
                        ? "border-[1px] border-red-500 text-red-500"
                        : "border-none"
                      }
                        w-[130px] border-0 focus:outline-0`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveAllValues} className='bg-blue-600 px-2 rounded-md text-white items-start'>Hisoblash</button>
      

      <TableNatija/>
    </div>
  );
}

export default List3



// const value = [
//   [{a1: 0},{b1:0},{c1: 0},{d1: 0},{e1: 0},{f1: 0},{g1: 0},{h1: 0}],
//   [{a2: 0},{b2:0},{c2: 0},{d2: 0},{e2: 0},{f2: 0},{g2: 0},{h2: 0}],
//   [{a3: 0},{b3:0},{c3: 0},{d3: 0},{e3: 0},{f3: 0},{g3: 0},{h3: 0}],
//   [{a4: 0},{b4:0},{c4: 0},{d4: 0},{e4: 0},{f4: 0},{g4: 0},{h4: 0}],
//   [{a5: 0},{b5:0},{c5: 0},{d5: 0},{e5: 0},{f5: 0},{g5: 0},{h5: 0}],
//   [{a6: 0},{b6:0},{c6: 0},{d6: 0},{e6: 0},{f6: 0},{g6: 0},{h6: 0}],
//   [{a7: 0},{b7:0},{c7: 0},{d7: 0},{e7: 0},{f7: 0},{g7: 0},{h7: 0}],
//   [{a8: 0},{b8:0},{c8: 0},{d8: 0},{e8: 0},{f8: 0},{g8: 0},{h8: 0}],
// ]
// const errors = [
//   [{a1: false},{b1:false},{c1: false},{d1: false},{e1: false},{f1: false},{g1: false},{h1: false}],
//   [{a2: false},{b2:false},{c2: false},{d2: false},{e2: false},{f2: false},{g2: false},{h2: false}],
//   [{a3: false},{b3:false},{c3: false},{d3: false},{e3: false},{f3: false},{g3: false},{h3: false}],
//   [{a4: false},{b4:false},{c4: false},{d4: false},{e4: false},{f4: false},{g4: false},{h4: false}],
//   [{a5: false},{b5:false},{c5: false},{d5: false},{e5: false},{f5: false},{g5: false},{h5: false}],
//   [{a6: false},{b6:false},{c6: false},{d6: false},{e6: false},{f6: false},{g6: false},{h6: false}],
//   [{a7: false},{b7:false},{c7: false},{d7: false},{e7: false},{f7: false},{g7: false},{h7: false}],
//   [{a8: false},{b8:false},{c8: false},{d8: false},{e8: false},{f8: false},{g8: false},{h8: false}],
// ]


// return (
//   <table>
//     <thead>
//       <tr>
//         {value.map(item => (
//           <th>item</th>
//         ))}
//       </tr>
//     </thead>
//     <tbody>
//       {value.map((i,index1) => (
//         <tr className='w-[100px]'>
//         {i.map((j, index2) => {
//           return (
//             <td className='border-[1px] border-slate-500'>
//               <Input
//                 placeholder={index2}
//                 type={"number"}
//                 step={index2 > 3 ? 0.001 : 0.01}
//                 onchange={(e) => {
//                   Object.keys(j).forEach(item => j[item] = e.target.value)
//                   const objError = errors[index1][index2]
//                   if (index2 == 0 && e.target.value < 0.25) {
//                     Object.keys(objError).forEach(item => objError[item]=true)
//                   } else {
//                     Object.keys(objError).forEach(item => objError[item]=false)
//                   }

//                   if (Object.values(objError)[0]) {
//                     console.log(Object.values(errors[index1][index2])[0]);
//                   }
//                 }}
//                 className={`w-full border-0 ${Object.values(errors[index1][index2])[0] && "border-2"} `} />
//             </td>
//           )
//           })}
//         </tr>
//       ))
//       }
//     </tbody>
//   </table>
// )
// }