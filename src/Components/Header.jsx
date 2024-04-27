import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Balance from './Balance'


const Header = () => {
  const [showAdd, setshowAdd] = useState(false)

  const toggleForm = () =>{
    setshowAdd(!showAdd);
  }
  
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(item=>item.amount);
  const total = amounts.reduce((accumulate, item) => (accumulate += item), 0).toFixed(2)
  return (
    <header className='w-full py-1'>
        <h2 className='mt-2 py-1 text-2xl font-medium'>Expense Tracker</h2>
        
        <div className='flex justify-between items-center'>
          <Balance balance={total} />
          <div className='flex space-x-4'>
           { showAdd && <div className={`relative`}>
              <input type="number" className="py-1 bg-slate-300" placeholder="Enter Amount" />
              <button className='inset-y-0 right-0 pr-2 absolute'>v</button>
            </div>}

            <button className='py-1 px-2 bg-pink-600'
            onClick={toggleForm}>{showAdd ? 'Close' : 'Add'}</button>
          </div>
        </div>

    </header>
  )
}

export default Header