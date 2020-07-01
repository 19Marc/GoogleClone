import React, { useState, useEffect, useReducer, useContext} from 'react';
import { Context } from '../newStore'
import axios from 'axios';

import dataFetchReducer from '../reducers/dataFetchReducer'

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
 
  const [state, dispatch] = useContext(Context)
 
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
    };
  }, [url]);
 
  return [state, setUrl];
};

export default useDataApi ;