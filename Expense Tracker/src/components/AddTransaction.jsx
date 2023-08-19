import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'


export const AddTransaction = () => {
  const[text, setText] = useState('')
  const[amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setAmount('')
    setText('')

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }
  

  return (
    <>
       <h3>Add new transaction</h3>
    <form onSubmit={handleSubmit}>
        <div className='form-control'>
            <label htmlFor="text">Text</label>
            <input type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder='Enter text...' />
        </div>
        <div className='form-control'>
            <label htmlFor="amount">
                Amount <br />
            </label>
            <input type="number"
             onChange={(e) => setAmount(e.target.value)}
             value={amount}
            placeholder='Enter Amount' />
        </div>
        <button className='btn'>Add transaction</button>
    </form>
    </>
  )
}
