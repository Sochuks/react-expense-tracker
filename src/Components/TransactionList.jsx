import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div className='flex flex-col max-w-md'>
        <div className='py-1 font-semibold text-center'>
          <h4 className='uppercase'>Transaction History</h4>
      </div>
      {/* SEARCH TRANSACTION */}
        <div className='relative mx-auto mb-3'>
            <input type="text" className="py-2 px-2 w-[300px] rounded-lg bg-slate-100" placeholder="Search Transactions" />
            <button className='inset-y-0 absolute right-2 text-2xl text-slate-500'>O</button>
        </div>
        <div className='flex flex-col'>
            {transactions.map((transaction)=>(
            <Transaction key={transaction.id} id={transaction.id} name={transaction.text} amount={transaction.amount}/>

          ))};
        </div>
    </div>
    
  )
}

export default TransactionList