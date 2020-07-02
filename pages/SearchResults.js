import React, {useContext} from 'react'
import { ThemeProvider } from 'styled-components';


import theme from '../config/theme'

import Layout from '../components/layouts/Layout/layout'
import Footer from '../components/layouts/Footer/footerLayout'

import List from '../components/list/list'

const SearchResults = () => {
  return (
    <ThemeProvider theme={theme}>
      <div> 
        <Layout>
          <List />
          <Footer />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default SearchResults;