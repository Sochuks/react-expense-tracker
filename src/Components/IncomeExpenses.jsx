import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);

  const amount = transactions.map(item => (item.amount))

  // Get Income
  const income = amount
    .filter(item => item > 0)
    .reduce((accumulate, item) => (accumulate += item), 0).toFixed(2)

  // Get Expense
  const expense = amount
    .filter(item => item < 0)
    .reduce((accumulate, item) => (accumulate += item), 0).toFixed(2)

  return (
    <div className='w-full flex justify-between'>
        {/* Income */}
        <div className='px-3 py-2 bg-green-400 w-full text-center text-white rounded-l-md border-r-2 border-slate-100'>
           <h4 className='font-bold'>Income</h4>
           <p className='text-lg'>{income}</p>
        </div>

        {/* Expenses */}
        <div className='px-3 py-2 bg-red-400 w-full text-center text-white rounded-r-md'>
           <h4 className='font-medium'>Expenses</h4>
           <p className='text-lg'>{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses