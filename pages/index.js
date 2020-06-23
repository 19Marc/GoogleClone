import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../config/globalStyles'
import theme from '../config/theme'

import Head from 'next/head'

// import * as theme from 'config/theme'
import LayoutComponent from '../components/layoutComponent/layout'
import HomeComponent from '../components/Home/homeLayout'
import HeaderComponent from '../components/headerComponent/headerLayout'
import FooterComponent from '../components/footerComponent/footerLayout'
import SearchbarComponent from '../components/searchbarComponent/searchbarLayout'


// Start Sideproject Googleclonex

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div> 
        <Head>
        <title>GoogleClone</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <LayoutComponent>
        <GlobalStyles />
          <HomeComponent>
            <HeaderComponent />

            <SearchbarComponent />

            <FooterComponent /> 

          </HomeComponent>
        </LayoutComponent>
      </div> 
    </ThemeProvider>
  )
}
