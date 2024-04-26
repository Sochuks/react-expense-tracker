import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Balance from './Balance'


const Header = () => {
  
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(item=>item.amount);
  const total = amounts.reduce((accumulate, item) => (accumulate += item), 0).toFixed(2)
  return (
    <header className='w-full py-1'>
        <h2 className='mt-2 py-1 text-2xl font-medium'>Expense Tracker</h2>
        
        <div>
          <Balance balance={total} />
        </div>

    </header>
  )
}

export default Header