import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
    // state management
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    // formSubmit
    const formSubmit = (e) =>{
        e.preventDefault()
  
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: text.trim(),
            amount: parseInt(amount)
        };

        addTransaction(newTransaction);
        setText('')
        setAmount(0);
    }
    
  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={formSubmit}>
            <div>
                {/* Text */}
                <label htmlFor='text' className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input placeholder="Enter Text" type="text"  
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                        id='text'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}/>
                        {/* validation warning */}
                        <div className={`inset-y-0 right-0 pr-3 flex items-center pointer-events-none ${text == '' ? 'absolute' : 'hidden'}`}>
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>

                    {/* Amount */}
                    <label htmlFor="amount" className="block text-sm font-medium leading-5  text-gray-700">Amount 
                    <br/> (negative - expense, positive - income) </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input placeholder="Enter Amount" type="number" 
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" 
                            id='amount'
                            value={amount}
                            onChange={(e)=>setAmount(e.target.value)}/>
                            {/* validation warning */}
                            <div className={`inset-y-0 right-0 pr-3 flex items-center pointer-events-none ${amount == ''? 'absolute' : 'hidden'}`}>
                                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button>Add Transactions</button>
            </div>
        </form>
    </div>
  )
}

export default AddTransaction