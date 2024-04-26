import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    
    <div>
      {transactions.map((e)=>(
        <div key={e.id}>
            <h3>History</h3>
            <ul>
              {e.text} <li><span>{e.amount}</span> <button>Delete</button></li>
            </ul>
        </div>
      ))};
        
    </div>
  )
}

export default TransactionList