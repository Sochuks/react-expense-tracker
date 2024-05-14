import React, {useState, useContext, useEffect} from 'react'
import Balance from './Balance'
import { GlobalContext } from '../Context/GlobalState'



const Overview = () => {
    // iMPORT GLOBAL CONTEXT
    const {transactions, addTransaction} = useContext(GlobalContext);

    const [isFormVisible, toggleForm] = useState(false);
    const [amnt, setAmnt] = useState(0);
    const [income, updateIncome] = useState()
    const [expenditure, updateExpenditure] = useState()

    // Calculate Balance
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((accumulator, item) => (accumulator += item), 0).toFixed(2);

    // formSubmit
    const formSubmit = (e) =>{
        e.preventDefault()
  
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: "Top-up Balance",
            amount: parseInt(+amnt)
        };

        addTransaction(newTransaction);
        toggleForm();
    }

    // UseEffect
    useEffect(()=>{
        const income = amounts
        .filter((item) => (item > 0))
        .reduce((acc, item) =>(acc += item), 0)
        .toFixed(2)

        const expenditure = amounts
        .filter((item) => (item < 0))
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

        updateIncome(income);
        updateExpenditure(expenditure);
    }, [transactions])



  return ( 
    <section className='w-full my-2'>
        <div className='flex justify-evenly items-center'>
          {/* BALANCE */}
          <Balance balance={total} />
            {/* ADD TO BALANCE */}
          <div className='flex'>
           { isFormVisible && <div className="relative pl-2">
              <input type="number" className={`py-2 px-2 font-medium opacity-0 bg-slate-300 rounded-l-md transition-opacity duration-500 ${isFormVisible?'opacity-100':''} `}
              value={amnt}
              onChange={(e)=>setAmnt(e.target.value)} 
              placeholder="Top-up Balance" />
              
              <button className='inset-y-0 right-0 pr-3 pl-3 absolute text-2xl text-white bg-green-500 transition-colors duration-300 hover:bg-green-400 rounded-l-md'
              onClick={formSubmit}>+</button>
            </div>}

            <button className={`py-2 px-2 bg-green-600 text-white rounded-r-md hover:bg-green-800 transition-colors duration-500 ${isFormVisible?'bg-red-500 hover:bg-red-700':''}`}
            onClick={()=>(toggleForm(!isFormVisible))}>{isFormVisible ? 'Cancel' : 'Top-up'}</button>
          </div>
        </div>

        {/* INCOME & EXPENSES */}
        <div className='w-full flex justify-between'>
            {/* Income */}
            <div className='px-3 py-2 bg-green-400 w-full text-center text-white rounded-l-md border-r-2 border-slate-100'>
            <h4 className='font-bold'>Income</h4>
            <p className='text-lg'>{income}</p>
            </div>

            {/* Expenses */}
            <div className='px-3 py-2 bg-red-400 w-full text-center text-white rounded-r-md'>
            <h4 className='font-medium'>Expenses</h4>
            <p className='text-lg'>{expenditure}</p>
            </div>
        </div>
    </section>
  )
}

export default Overview