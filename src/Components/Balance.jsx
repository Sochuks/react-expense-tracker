import React from 'react'

const Balance = ({balance}) => {
  return (
    <div className='py-1 font-medium'>
        <h4 className='uppercase -mb-1'>Your Balance</h4>
        <h2 className={`text-3xl ${balance < 100 ? 'text-red-400': 'text-green-600'}`}>${balance}</h2>
    </div>
  )
}

export default Balance