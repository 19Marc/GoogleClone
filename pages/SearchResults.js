import React from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../config/globalStyles'
import theme from '../config/theme'

import Layout from '../components/layouts/Layout/layout'
import SearchBar from '../components/layouts/SearchBar/searchbarLayout'
import Footer from '../components/layouts/Footer/footerLayout'

import List from '../components/list/list'

const SearchResults = () => {
  return (
    <ThemeProvider theme={theme}>
      <div> 
        <Layout>
          <SearchBar />


          <List />

          <Footer />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default SearchResults;