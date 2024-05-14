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
            <ul className={`relative`} id='list'>
               <li className={`flex justify-between w-full py-3 px-2 bg-slate-100 rounded
            ${amount < 0 ? 'border-r-4 border-red-500' : 'border-r-4 border-green-700'}`}><span>{name}</span><span>{sign}${Math.abs(amount)}</span></li>
              <button 
              className='absolute top-3 -left-4 deleteBtn font-bold text-red-500'
              onClick={()=> deleteTransaction(id)}>X</button> 
            </ul>
        </div>
    </div>
  )
}

export default Transaction