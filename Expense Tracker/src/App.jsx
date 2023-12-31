import React from 'react'

//imports
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpense } from './components/IncomeExpense'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

//context
import { GlobalContext, GlobalProvider } from './context/GlobalContext'


import './App.css'

function App() {
  

  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
        
      </div>
    </GlobalProvider>
  
  )
  
}

export default App
