import React from 'react'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'


function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <Header/>
    <IncomeExpenses />
    <TransactionList/>
    </div>
  )
}

export default App
