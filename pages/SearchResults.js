import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';


import theme from '../config/theme'

import { usefetchApi } from '../components/functions/fetchApi'

import Layout from '../components/layouts/Layout/layout'
import Footer from '../components/layouts/Footer/footerLayout'

import List from '../components/list/list'

const SearchResults = () => {
  const [searchInput, setSearchValue] = useState("");
  const [result, loading] = usefetchApi(searchInput);
  // const [value, setValue] = useState("");
  console.log("MAIN", result)
  return (
    <ThemeProvider theme={theme}>
      <div> 
        <Layout>
            <div>
              <form
              id='form'
              onSubmit={event => event.preventDefault()}
              //event.default
              >
               <input
                type="text"
                placeholder="Type your search"
                value={searchInput}
                required onChange={event => setSearchValue(event.target.value)}
               >
               </input>
               <button
               type="submit"
               >
                 SearchButton  
              </button>
              </form> 
            </div>
            {loading === "false" ? (
              <h1>Search</h1>
            ) : loading === "null" ? (
              <h1>Nothing found</h1>
            ) : (
              result.map(item => {
              return <p style={{color: "white"}}>Title : {item}</p>
              })
            )}
          <Footer />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default SearchResults;

{/* <UL>
{typeof data.items !== "undefined" && data.items.map(item => (
  <LI key={item.cacheId}>
    <LIP>{item.title}</LIP>
    <LIA href={item.link}>{item.link}</LIA>
  </LI>
))}
</UL> */}



// IMPORTANT LINK TO THE NEXT PAGE
// onSubmitHandler = (e) => {
//   e.preventDefault();
//  this.props.history.push('/dashboard')
// }