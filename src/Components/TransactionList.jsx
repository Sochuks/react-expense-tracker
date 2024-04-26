import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div>
        <div className='flex flex-col gap-4'>
            {transactions.map((transaction, key)=>(
            <Transaction key={transaction.id}  name={transaction.text} amount={transaction.amount}/>

          ))};
        
        </div>
    </div>
    
  )
}

export default TransactionList