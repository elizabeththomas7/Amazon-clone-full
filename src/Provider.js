import React, { createContext, useContext, useReducer } from 'react';

//data layer
export const stateContext=createContext();

//enables use of data layer
export const Provider=({reducer,initialState,children}) =>{
    return (
        <stateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateValue=()=>useContext(stateContext);
