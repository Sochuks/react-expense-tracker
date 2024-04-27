import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({name, amount, id}) => {
    const {dispatch} = useContext(GlobalContext);
    // Get sign
    const sign = amount < 0 ? '-' : '+'; 

  // Actions
    const deleteTransaction = (id) =>{
      dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
      })
    }

  return (
    <div>
        <div className='my-1'>
            <ul className={`flex justify-between w-96 py-3 px-2 bg-slate-300 rounded-md
            ${amount < 0 ? 'border-r-4 border-red-500' : 'border-r-4 border-green-700'}`}>
              {name} <li><span>{sign}${Math.abs(amount)}</span> <button 
              className=''
              onClick={()=> deleteTransaction(id)}>Delete</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Transaction