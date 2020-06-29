import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { getServerSideProps } from 'next'

import { SearchbarWrapper, SearchbarInput, SearchWrapper, InputWrapper, SearchButton, TextWrapper, GoogleImage, SafedHours } from './styles'



// const ApiKey = "AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&";
// const GoogleKey = "003843309577069876842:stoc1spwaxe&q";
// query = ""

export default function SearchbarComponent() {

  const [formData, setFormData] = useState ('');

  const [data, setData] = useState({ items: [] });

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=${formData}`)
    .then(response => response.json())
    .then(data => {
        setData(data)
        console.log(data)
    })
    .catch(error => console.error(error))  
  };

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
        {typeof data.items !== "undefined" && data.items.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </SearchbarWrapper>
  )
};
