import React from 'react'

const Transaction = ({name, amount}) => {
    const sign = amount < 0 ? '-' : '+'; 

  return (
    <div>
        <div className=''>
            <ul className='py-4 px-2 bg-slate-300'>
              {name} <li><span>{sign}${amount}</span> <button>Delete</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Transaction