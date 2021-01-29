import Head from 'next/head'

// CSS Libs
import '98.css'
import 'font-awesome/css/font-awesome.css'
import './global.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>felipe0liveira.dev</title>
        <link rel='shortcut icon' href='/images/favicon.png' type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
