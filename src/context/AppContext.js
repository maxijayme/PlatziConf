import React, { createContext } from 'react'
import useInitialState from '../hooks/useInitialState'

const AppContext = createContext()

export const ContextProvider = ({children}) =>{
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;