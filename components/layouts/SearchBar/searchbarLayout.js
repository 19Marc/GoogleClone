import React, { useState, useEffect, useReducer, } from 'react';

import useDataApi from '../../../store/actions/useDataApiAction'
import { createStore } from 'redux';

import axios from 'axios';
// import { getServerSideProps } from 'next'


import { SearchbarWrapper, SearchbarInput, SearchWrapper, InputWrapper, SearchButton, TextWrapper, GoogleImage, SafedHours, SearchList, SearchResult } from './styles';
import List, { UL, LI, LIP, LIH3, LIA } from '../../list/styles';



export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=',
    { items: [] },
  );


  return (
    <SearchbarWrapper>
      <SearchWrapper>
        <InputWrapper
          id="form"
          onSubmit={ event => {doFetch( `https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=${query}`);

          event.preventDefault();
        }}>
          <SearchbarInput
            type="text"
            placeholder="Type your search"
            value={query} 
            required onChange={event => setQuery(event.target.value)}
          />
          <TextWrapper>
            <GoogleImage>Google</GoogleImage>
            <SafedHours>xxx Watt hours safed</SafedHours>
          </TextWrapper>
          <SearchButton type="submit">Search</SearchButton>
        </InputWrapper>
      </SearchWrapper>
        {isError && <div>Something went wrong ...</div>}
        
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <UL>
            {typeof data.items !== "undefined" && data.items.map(item => (
              <LI key={item.cacheId}>
                <LIP>{item.title}</LIP>
                <LIA href={item.link}>{item.link}</LIA>
              </LI>
            ))}
          </UL>
        )}
    </SearchbarWrapper>
  )
};

// <UL>
// {typeof data.items !== "undefined" && data.items.map(item => (
//   <LI key={item.cacheId}>
//     <LIP>{item.title}</LIP>
//     <LIA href={item.link}>{item.link}</LIA>
//     <LIP>{item.snippet}</LIP>
//     {/* <img href={item.svg.pagemap.cse_thumbnail}></img> */}
//   </LI>
// ))}
// </UL>


//   <ul>
//   {data.hits.map(item => (
//     <li key={item.objectID}>
//       <a href={item.url}>{item.title}</a>
//     </li>
//   ))}
// </ul>

// const ApiKey = "AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&";
// const GoogleKey = "003843309577069876842:stoc1spwaxe&q";
// query = ""


  // const [formData, setFormData] = useState ('');


  // const handleSubmit = (event) => {
  //   event.preventDefault()
  // }
  //   fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=${formData}`)
  //   .then(response => response.json())
  //   .then(data => {
  //       setData(data)
  //       console.log(data)
  //       // console.log("cash", data.items.map(id => id.cacheId))
  //       // console.log("searchimage: ", data.items.map( svg => svg.pagemap.cse_thumbnail));
  //   })
  //   .catch(error => console.error(error))  
  // };


    // const [data, setData] = useState(initialData);

  // const [url, setUrl] = useState(initialUrl);

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);