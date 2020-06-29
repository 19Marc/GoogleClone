import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { getServerSideProps } from 'next'

import { SearchbarWrapper, SearchbarInput, SearchWrapper, InputWrapper, SearchButton, TextWrapper, GoogleImage, SafedHours } from './styles'



// const ApiKey = "AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&";
// const GoogleKey = "003843309577069876842:stoc1spwaxe&q";
// query = "";

// handleSubmit = (event) => {
//   event.preventDefault()
// }

// handleOnChange = (event) => {
//   event.preventDefault()
//   console.log(event)
//   console.log(event.target.name)
//   console.log(event.target.value)
// }

  // const handleOnChange = (event) => {
  //   event.preventDefault()
  //   setFormData({ ...formValue, [event.target.name]: event.target.value });
  // };



  // useEffect(() => {
  //   async function  fetchRepos() {
  //     const  response  = await fetch(`https://api.github.com/users/${userName}/repos`)
  //     const  repos  = await response.json()

  //     // our setRepos call tells React to re-render the component.
  //     // which then calls our useEffect hook again, so on and so forth
  //     setRepos()
  //   } 
  //   fetchRepos().catch(error  =>  console.error(error))
  //   // this is because we are not passing an array of 
  //   // dependencies as the second argument to useEffect
  // })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setUserName(e.target.username.value)
  // };

export default function SearchbarComponent() {

  const [formData, setFormData] = useState ('');

  const [data, setData] = useState({ items: [] });

  // const [response, setResponse] = useState({
  //   type: '',
  //   message: '',
  // });

  useEffect( () => {
    const fetchData = async () => {
      const api = await axios(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=${formData}`);
      // const getData = await api.json();
      console.log("apiData", api.data)
      // console.log("2getData", getData.items.cacheId)
      // const safeData = await getData.items.map(data => data.title);
      // console.log("safeData: ", safeData)
      // console.log("get DATA", getData.items)
      // console.log("map", getData.items.map(data => data.cacheId))
     
      setData(api.data);
    };
    fetchData();
  }, []);

  // console.log("data", data)

  // async function getData() {
  //   const api = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=${formData}`);
  //   const result = await fetch(api);
  //   const getResult = await result.json();
  //   setFormData(getResult);
  //   console.log(getResult)
  //   }

  const handleSubmit = async event => {
    event.preventDefault()
    // console.log(event.target.name)
    // console.log(event.target.value)
    // .then(response => response.json())
    // .then
    // console.log(formData)
  


  }


  return (
    <SearchbarWrapper>
      <SearchWrapper>
        <InputWrapper id="form" onSubmit={handleSubmit}>
          <SearchbarInput id="search" type="text" placeholder="Type your search" value={formData} required onChange={(event) => setFormData(event.target.value)}/>
          <TextWrapper>
            <GoogleImage>Google</GoogleImage>
            <SafedHours>xxx Watt hours safed</SafedHours>
          </TextWrapper>
        </InputWrapper>
        <SearchButton>Search</SearchButton>
      </SearchWrapper>
      <ul>
        <li color="white"></li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
      {/* <ul>
        {data.items.map(item => (
          <li key={item.cacheId}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul> */}
    </SearchbarWrapper>
  )
};
