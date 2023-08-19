import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Marketing', amount: 100 },
        { id: 2, text: 'Food', amount: -50 },
        { id: 3, text: 'Clothes', amount: -340 },
        { id: 4, text: 'Salary', amount: 2000 },
    ]
}

//createContext
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);


//delete transaction
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
}

//add transaction
function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>

    )

}