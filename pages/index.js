// import { ThemeProvider } from 'styled-components' theming

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
    <div> 

      <Head>
      <title>GoogleClone</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutComponent>
        <HomeComponent>
          <HeaderComponent />

          <SearchbarComponent />

          <FooterComponent /> 

        </HomeComponent>
      </LayoutComponent>
    </div> 
  )
}




// CSS VARIABLES (POSTCSS / TAILWIND ODER STYLE COMPONENTS
// GOOGLE SEARCH 
