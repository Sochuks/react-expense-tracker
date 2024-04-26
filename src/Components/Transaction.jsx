import React from 'react'

const Transaction = ({name, amount}) => {
    const sign = amount < 0 ? '-' : '+'; 

  return (
    <div>
        <div className='my-2'>
            <ul className={`flex justify-between w-96 py-3 px-2 bg-slate-300 rounded-md
            ${amount < 0 ? 'border-r-4 border-red-500' : 'border-r-4 border-green-700'}`}>
              {name} <li><span>{sign}${Math.abs(amount)}</span> <button>Delete</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Transaction