import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'


// Initial state
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Top-up Balance', amount: +500},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: -150},
    ],
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider components
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const addTransaction = (transaction) =>{
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
  }

    return (
        <GlobalContext.Provider 
        value={{transactions: state.transactions,
        dispatch,
        addTransaction}}>

            {children}

        </GlobalContext.Provider>
        )
}