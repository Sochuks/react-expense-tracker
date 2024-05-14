import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  // IMPORT GLOBAL CONTEXT
  const { transactions } = useContext(GlobalContext);

  const [srchInput, addsrchInput] = useState('')
  const [filteredTransaction, updateTxn] = useState(transactions)

  // FILTER TRANSACTION
  const filterData = (srchInput)=>{
    if(!srchInput || !srchInput.trim().length){
      updateTxn(transactions);
      return;
    }
    let txn = [...transactions];
    txn = txn.filter((item)=> item.text.toLowerCase().includes(srchInput.toLowerCase().trim()))
    updateTxn(txn);
    console.log(filteredTransaction)
  };

  useEffect(()=> filterData(srchInput), [transactions])


  return (
    <div className='flex flex-col w-full'>
        <div className='py-1 font-semibold text-center'>
          <h4 className='uppercase'>Transaction History</h4>
      </div>
      {/* SEARCH TRANSACTION */}
        <div className='relative mx-auto mb-3'>
            <input type="text" 
            value={srchInput}
            onChange={(e)=>{
              addsrchInput(e.target.value)
              filterData(e.target.value)}}
            className="py-2 px-2 w-[300px] rounded-lg bg-slate-200 focus:outline-slate-300" placeholder="Search Transactions" />
            
        </div>
        <div className='flex flex-col'>
            {filteredTransaction.length ? filteredTransaction.map((transaction)=>(
            <Transaction key={transaction.id} id={transaction.id} name={transaction.text} amount={transaction.amount}/>

          )): "No Record Found"}
        </div>
    </div>
    
  )
}

export default TransactionList