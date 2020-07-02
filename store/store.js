import React, {createContext, useReducer, useContext} from 'react'
import reducer from './reducers/dataFetchReducer'

const initialState = {
  isLoading: false,
  isError: false,
  data: "",
}

// const store = createContext();
// const { Provider } = store;

const StateProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [url, setUrl] = useState(initialUrl);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState);

export default StateProvider;

