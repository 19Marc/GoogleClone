import Head from 'next/head'

import Header from '../components/header/header'
import Searchbar from '../components/searchbar/searchbar'
import Footer from '../components/footer/footer'

// Start Sideproject Googleclone
export default function Home() {
  return (
    <div className="container">
      
      <Head>
        <title>GoogleClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      <Header>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">GoogleClone</a>
        </h1>

        <p className="description">
          We will solve your Problem
        </p>
      </Header>

      <Searchbar>
        <p className="searchbar">searchbar</p>
        <input type="text" placeholder="Search.."></input>
      </Searchbar>

    </main>

      <Footer>
        <p className="footer">Footer Text Placeholder</p>
      </Footer>
    
    </div>
  )
}




// CSS VARIABLES (POSTCSS / TAILWIND ODER STYLE COMPONENTS
// GOOGLE SEARCH 
