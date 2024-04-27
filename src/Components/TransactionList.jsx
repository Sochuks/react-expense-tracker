import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div>
        <div className='flex flex-col'>
            {transactions.map((transaction)=>(
            <Transaction key={transaction.id} id={transaction.id} name={transaction.text} amount={transaction.amount}/>

          ))};
        </div>
    </div>
    
  )
}

export default TransactionList