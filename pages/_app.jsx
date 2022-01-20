
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }){
  return <>
    <Head>
      <title>Demaloo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link href="http://fonts.cdnfonts.com/css/gilroy-bold?styles=20876,20877,20878,20879,20880" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp