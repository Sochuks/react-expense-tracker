import React from 'react'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

import {GlobalProvider} from './Context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <div className='h-screen mx-auto max-w-md bg-white'>
      <div className='flex flex-col items-center'>
          <Header/>
          <IncomeExpenses />
          <TransactionList/>
          <AddTransaction/>
      </div>
      </div>      
    </GlobalProvider>

  )
}

export default App
