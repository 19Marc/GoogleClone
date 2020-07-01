
import React, {useContext} from 'react';
// import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Head from 'next/head'

import Store from '../store/newStore'

import GlobalStyles from '../config/globalStyles'
import theme from '../config/theme'

// import * as theme from 'config/theme'
import Layout from '../components/layouts/Layout/layout'
import HomeWrapper from '../components/layouts/HomeWrapper/homeLayout'
import Header from '../components/layouts/Header/headerLayout'
import Footer from '../components/layouts/Footer/footerLayout'
import SearchBar from '../components/layouts/SearchBar/searchbarLayout'


// Start Sideproject Googleclonex

export default function Home() {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <div> 
          <Head>
          <title>GoogleClone</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>

          <Layout>
          <GlobalStyles />
            <HomeWrapper>
              <Header />

              <SearchBar />

              <Footer /> 

            </HomeWrapper>
          </Layout>
        </div> 
      </ThemeProvider>
    </Store>
  )
}
