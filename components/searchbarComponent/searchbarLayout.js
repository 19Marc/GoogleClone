import React, { useState } from 'react';
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

export default function SearchbarComponent() {

  const [formData, setFormData] = useState ('');

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(formData)
    // query(formData);

    try {
      const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=${formData}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(res)
      const json = await res.json();
      const searchResult = await json.items
      console.log("jsonitems", json.items)
      console.log("searchResults", searchResult)
      j

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };

  // const [keyData, setKeyData] = useState ({
  //   ApiKey: "AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&",
  //   GoogleKey: "003843309577069876842:stoc1spwaxe&q",
  //   query: null,
  // });
  
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
    </SearchbarWrapper>
  )
}
// export async function getServerSideProps(context) {
//   const res = await fetch(
//       `https://www.googleapis.com/customsearch/v1?key=` + {ApiKey} + `cx=` + {GoogleKey} + `=` + {query}
//   ).then((res) => res.json());
//   console.log("getServerProps", res, context.params, context.query);
//   return {
//       props: { ...res, name: context.query.slug }
//   }
// };


// export async function getServerSideProps(context) {
//   const res = await fetch(
//       "https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=google"
//   ).then((res) => res.json());
//   console.log("getServerProps", res, context.params, context.query);
//   return {
//       props: { ...res, name: context.query.slug }
//   }
// };



// import { useState } from 'react';

// import { SearchbarWrapper, SearchbarInput, SearchWrapper, InputWrapper, SearchButton, TextWrapper, GoogleImage, SafedHours } from './styles'
// import { getServerSideProps } from 'next'


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

// export default function SearchbarComponent() {

  // const [formValue, setFormData] = useState ({
  //   name: "",
  // });

  // const [keyData, setKeyData] = useState ({
  //   ApiKey: "AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&",
  //   GoogleKey: "003843309577069876842:stoc1spwaxe&q",
  //   query: null,
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(formValue)
  // };
  
  // const handleOnChange = (event) => {
  //   event.preventDefault()
  //   setFormData({ ...formValue, [event.target.name]: event.target.value });
  // };
  // return (
  //   <SearchbarWrapper>
  //     <SearchWrapper>
  //       <InputWrapper id="form" onclick={handleSubmit}>
  //         <SearchbarInput id="search" type="text" placeholder="Type your search" name="searchName" onChange={handleOnChange}/>
  //         <TextWrapper>
  //           <GoogleImage>Google</GoogleImage>
  //           <SafedHours>xxx Watt hours safed</SafedHours>
  //         </TextWrapper>