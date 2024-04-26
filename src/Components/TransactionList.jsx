import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    
    <div>
      {transactions.map((e)=>(
        <Transaction key={e.id} getTransaction={e} />
      ))};
        
    </div>
  )
}

export default TransactionList