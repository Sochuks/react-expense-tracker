import React from 'react'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

import GlobalProvider from './Context/GlobalState'


function App() {

  return (
    <GlobalProvider>
      <div className='flex flex-col justify-center items-center h-screen'>
          <Header/>
          <IncomeExpenses />
          <TransactionList/>
          <AddTransaction/>
      </div>      
    </GlobalProvider>

  )
}

export default App
