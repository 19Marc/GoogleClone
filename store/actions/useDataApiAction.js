import React, { useState, useEffect, useReducer, useContext} from 'react';
import { Context }  from '../store'
import axios from 'axios';

import reducer from '../reducers/dataFetchReducer'



const useDataApi = () => {
  const [state, dispatch] = useContext(Context)
  const [url, setUrl] = useState("");

  useEffect(() => {
    let didCancel = false;
 
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
 
      try {
        const result = await axios(url);
 
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };
 
    fetchData();
 
    return () => {
      didCancel = true;
    }
  }, [url]);

  return [state, setUrl];
};

export default useDataApi ;


// (
//   <Context.Provider value={{ fetchData, state }}>
//   {props.children}
//   </Context.Provider>
// );