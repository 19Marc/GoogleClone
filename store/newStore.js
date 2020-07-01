import React, {createContext, useReducer} from 'react'
import dataFetchReducer from './reducers/dataFetchReducer'

const initialData = { data: "" }

const Store = ({children}) => {

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialData);

export default Store;